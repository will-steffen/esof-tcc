import { BaseEntity } from "./base-entity";

export class Payment extends BaseEntity {
    expectedDate: Date;
    paymentDate: Date;
    value: number;
    idCustomer: number;

    static fromData(data) {
        let e: Payment = super.fromData(data);
        e.expectedDate = e.expectedDate ? new Date(e.expectedDate) : null;
        e.paymentDate = e.paymentDate ? new Date(e.paymentDate) : null;
        return e;
    }
}