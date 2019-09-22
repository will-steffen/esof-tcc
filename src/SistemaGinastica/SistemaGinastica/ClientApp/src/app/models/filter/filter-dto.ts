import { BaseModel } from "../../models/base-model";
import { FilterFieldDTO } from "./filter-field-dto";

export class FilterDTO extends BaseModel {
    pageSize: number;
    totalResults: number;
    page: number;
    data: any[];
    fields: FilterFieldDTO[];
    orderByField: string;
    orderByDirection: string;
}
