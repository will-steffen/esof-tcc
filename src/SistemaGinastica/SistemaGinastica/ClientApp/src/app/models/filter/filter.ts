import { BlockHandler } from "src/app/handlers/block.handler";
import { BasePageDeps } from "src/app/pages/base-page-deps";
import { LogHandler } from "../../handlers/log.handler";
import { ServiceHandler } from "../../handlers/service.handler";
import { UserService } from "../../services/user.service";
import { FormInputType } from "../forms/base/form-input-type";
import { FilterDTO } from "./filter-dto";
import { FilterField } from "./filter-field";
import { FilterFieldDTO } from "./filter-field-dto";
import { FilterFieldSearchType } from "./filter-field-search-type";
import { FilterOrder } from "./filter-order";




export class Filter<T> {
    fields: FilterField[] = [];
    lastFieldsUsed: FilterField[] = [];
    data: T[] = [];
    pageSizeOptions = [10, 20, 50, 100];
    pageSize: number = this.pageSizeOptions[0];
    totalResults: number = 0;
    page: number = 1;

    orderBy: string;
    orderDirection: FilterOrder;

    service: ServiceHandler;
    logger: LogHandler;
    filterRoute: string;
    baseModelType: any;
    userService: UserService;

    afterSearchEvent: Function[] = [];

    onResetPage: Function[] = [];
    skipSearch: number = 0;
    showFilterArea = false;


    block: BlockHandler;
    onCleanPage: Function[] = [];

    configure(filterRoute: string, baseModelType: any, deps: BasePageDeps) {
        this.service = deps.service;
        this.logger = deps.logger;
        this.filterRoute = filterRoute;
        this.baseModelType = baseModelType;
        this.userService = deps.userService;
        this.block = deps.block;
    }

    /* Métodos para serem utilizados nas Pages */
    CreateField(label: string, field: string, type = FormInputType.TEXT) {
        let filterField = new FilterField(label, field).Type(type);
        this.fields.push(filterField);
        return filterField;
    }


    AfterSearch(afterSearch: Function) {
        this.afterSearchEvent.push(afterSearch);
        return this;
    }

    SkipSearch(n: number = 1): Filter<T> {
        this.skipSearch = n;
        return this;
    }

    PageSizeOptions(pageSizeOptions: number[]) {
        this.pageSizeOptions = pageSizeOptions;
        this.pageSize = this.pageSizeOptions[0];
        return this;
    }
    /* Métodos para serem utilizados nas Pages */


    paginate(event) {
        if (this.setPaginate(event)) {
            this.privateSearch().then(() => this.onPaginateOrSort());
        }
    }

    sort(event) {
        if (this.setOrder(event)) {
            this.privateSearch().then(() => this.onPaginateOrSort());
        }
    }

    private onPaginateOrSort() {

    }

    private setPaginate(paginateEvent): boolean {
        if (paginateEvent.page + 1 != this.page) {
            this.page = paginateEvent.page + 1;
            this.pageSize = paginateEvent.rows;
            return true;
        }
        return false;
    }

    private setOrder(orderEvent): boolean {
        if (!this.sameOrder(orderEvent)) {
            this.orderBy = orderEvent.field;
            this.orderDirection = orderEvent.order == 1 ? FilterOrder.Asc : FilterOrder.Desc;
            return true;
        }
        return false;
    }

    sameOrder(orderEvent): boolean {
        let n = this.orderDirection == FilterOrder.Asc ? 1 : -1;
        return orderEvent.order == n && this.orderBy == orderEvent.field;
    }

    getDTO(): FilterDTO {
        let dto = new FilterDTO();
        dto.pageSize = this.pageSize;
        dto.page = this.page;
        dto.totalResults = this.totalResults;
        dto.fields = [];
        let fields = this.fields.filter(x => x.type != FormInputType.MULTI_SELECT);

        let multiSelectFields = this.fields.filter(x => x.type == FormInputType.MULTI_SELECT);

        multiSelectFields.forEach(x => {
            if (x.value && Array.isArray(x.value)) {
                x.value.forEach(subValue => {
                    let subField = Object.assign({}, x);
                    subField.value = subValue;
                    fields.push(subField);
                })
            }
        });

        fields.forEach(field => {
            if (!field.ignoreValueOnFilter.Contains(field.value)) {
                let fieldDto = new FilterFieldDTO();
                fieldDto.type = FilterFieldSearchType.EQUAL;
                fieldDto.field = field.field;
                fieldDto.argument = field.value;
                if (field.type == FormInputType.TEXT) {
                    fieldDto.type = FilterFieldSearchType.LIKE;
                }
                if (field.filterType) {
                    fieldDto.type = field.filterType;
                    if (field.value.constructor.name == 'Date') {
                        let d: Date = new Date(field.value.getTime());
                        if (field.filterType == FilterFieldSearchType.LESS_EQUAL) {
                            fieldDto.argument = Date.GetLastInstant(d);
                        } else if (field.filterType == FilterFieldSearchType.LESS) {
                            fieldDto.argument = Date.GetFirstInstant(d);
                        }
                    }
                }
                dto.fields.push(fieldDto);
            }
        });
        dto.orderByDirection = this.orderDirection;
        dto.orderByField = this.orderBy;
        return dto;
    }

    clean() {
        this.fields.forEach(field => {
            field.reset();
        });
        this.onCleanPage.forEach(f => f());
        this.resetPage();
    }

    search(): Promise<void> {
        return this.privateSearch();
    }

    private privateSearch(): Promise<void> {
        return new Promise((resolve) => {
            if (!this.service || !this.filterRoute || !this.baseModelType) return;
            if (this.skipSearch > 0) {
                this.skipSearch--;
                this.block.stop();
                return resolve();
            }
            this.block.start();
            this.service.Post(this.filterRoute, this.getDTO())
                .then(filter => {
                    this.cloneLastFields();
                    this.data = filter.data.map(x => this.baseModelType.fromData(x));
                    this.totalResults = filter.totalResults;

                    this.afterSearchEvent.forEach(f => f());

                    resolve();
                })
                .catch(err => this.logger.error(err))
                .then(() => {
                    this.block.stop()
                });
        });
    }

    private cloneLastFields() {
        this.lastFieldsUsed = this.fields
            .map(x => Object.assign(new FilterField(x.label, x.field), x));
    }

    hasData() {
        return this.data && this.data.length > 0;
    }

    resetPage(cleanSelection = true): Promise<void> {
        this.page = 1;

        this.onResetPage.forEach((f) => f());

        if (cleanSelection) {
            return this.search();
        } else {
            return this.privateSearch();
        }
    }

    OnResetPage(f: Function) {
        this.onResetPage.push(f);
        return this;
    }

    OnCleanPage(f: Function) {
        this.onCleanPage.push(f);
        return this;
    }

    toggleFilterArea() {
        this.showFilterArea = !this.showFilterArea;
    }

    onChangePageSize() {
        this.resetPage(false);
    }


}
