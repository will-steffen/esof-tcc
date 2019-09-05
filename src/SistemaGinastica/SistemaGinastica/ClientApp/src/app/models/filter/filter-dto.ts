import { FilterFieldDTO } from "./filter-field-dto";
import { BaseModel } from "../../models/base-model";

export class FilterDTO extends BaseModel {
    pageSize: number;
    totalResults: number;
    page: number;
    data: any[];
    fields: FilterFieldDTO[];
    orderByField: string;
    orderByDirection: string;
}
