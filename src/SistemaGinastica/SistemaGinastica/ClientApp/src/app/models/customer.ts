import { PersonDataModel } from "./person-data-model";

export class Customer extends PersonDataModel {
    address: string;
    birthDate: Date;
    annualPlan: boolean;
    registration: string;

    static fromData(data){
        let e: Customer = super.fromData(data);
        e.birthDate = e.birthDate ? new Date(e.birthDate) : null;
        return e;
    }
}
