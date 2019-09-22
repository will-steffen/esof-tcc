import { PageType } from "../enums/page-type";
import { BaseEntity } from "../models/base-entity";
import { Filter } from "../models/filter/filter";
import { BaseForm } from "../models/forms/base/base-form";
import { Table } from "../models/table/table";
import { BaseDetailPage } from "./base-detail-page";
import { BasePageDeps } from "./base-page-deps";

export class BaseFilterPage<TModel extends BaseEntity, TForm extends BaseForm<TModel>>
    extends BaseDetailPage<TModel, TForm> {

    filter: Filter<TModel>;
    table: Table<TModel>;
    showDetail: boolean;

    constructor(
        deps: BasePageDeps,
        TModel: any,
        TForm: any,
        public filterRoute: string,
        defaultRoute: string
    ) {
        super(deps, TModel, TForm, defaultRoute);
        this.type = PageType.FILTER;
        if (!this.recoveredState) {
            this.filter = new Filter<TModel>();
            this.table = new Table<TModel>();
            this.showDetail = false;
            this.filter.configure(filterRoute, TModel, deps);
        }
    }

    ngOnInit() {
        if (this.recoveredState) return this.recoveredInit();
        this.block.start();
        this.loadScreenDeps()
            .then(() => {
                this.filter.fields = [];
                this.createFilter();
                this.table.actionList = [];
                this.table.columnList = [];
                this.createTable();
                this.recoveredInit();
            })
            .catch(err => { })
            .then(() => this.block.stop());
    }

    createFilter() { }
    createTable() { }
    afterFirstSearch() { }

    recoveredInit() {
        this.filter.search().then(() => this.afterFirstSearch());
    }

    edit(model: TModel) {
        this.form.Model(model);
        this.showDetail = true;
    }

    afterSave() {
        this.filter.search().then(() => this.closeDetails());
    }

    closeDetails() {
        this.showDetail = false
    }
}