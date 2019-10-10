import { BaseEntity } from "./base-entity";
import { Vacation } from "./vacation";

export class Payment extends BaseEntity {
    expectedDate: Date;
    paymentDate: Date;
    value: number;
    idCustomer: number;
    vacationList: Vacation[];

    static fromData(data) {
        let e: Payment = super.fromData(data);
        e.expectedDate = e.expectedDate ? new Date(e.expectedDate) : null;
        e.paymentDate = e.paymentDate ? new Date(e.paymentDate) : null;
        e.vacationList = e.vacationList ? e.vacationList.map(Vacation.fromData) : [];
        return e;
    }
}