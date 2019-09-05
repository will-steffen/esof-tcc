import { FilterFieldSearchType } from "./filter-field-search-type";

export class FilterFieldDTO {
    type: FilterFieldSearchType;
    field: string;
    argument: any;
}
