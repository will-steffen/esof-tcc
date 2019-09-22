import { FormInput } from "../forms/base/form-input";
import { FilterFieldSearchType } from "./filter-field-search-type";

export class FilterField extends FormInput<any> {
    ignoreValueOnFilter: any[] = [''];
    layoutSize: number = 1;
    filterType: FilterFieldSearchType;

    constructor(
        public label: string,
        public field: string
    ) {
        super(label)
    }

    NullValue(ignoreValueOnFilter: any[]) {
        this.ignoreValueOnFilter = ignoreValueOnFilter;
        return this;
    }

    LayoutSize(layoutSize: number) {
        this.layoutSize = layoutSize;
        return this;
    }

    FilterType(filterType: FilterFieldSearchType) {
        this.filterType = filterType;
        return this;
    }
}