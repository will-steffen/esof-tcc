import { PersonDataModel } from "./person-data-model";
import { PlanType } from "../enums/plan-type";

export class Customer extends PersonDataModel {
    address: string;
    birthDate: Date;
    planType: PlanType;
    registration: string;

    static fromData(data) {
        let e: Customer = super.fromData(data);
        e.birthDate = e.birthDate ? new Date(e.birthDate) : null;
        return e;
    }
}
