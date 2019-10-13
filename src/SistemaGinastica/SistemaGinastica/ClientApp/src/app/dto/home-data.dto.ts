import { BaseModel } from "../models/base-model";

export class HomeDataDTO extends BaseModel {
    countCustomer: number;
    countLatePayment: number;
}