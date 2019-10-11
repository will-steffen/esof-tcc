import { BaseEntity } from "./base-entity";
import { Payment } from "./payment";

export class Vacation extends BaseEntity {
    initDate: Date;
    endDate: Date;
    payment: Payment;

    static fromData(data) {
        let e: Vacation = super.fromData(data);
        e.initDate = e.initDate ? new Date(e.initDate) : null;
        e.endDate = e.endDate ? new Date(e.endDate) : null;
        e.payment = e.payment ? Payment.fromData(e.payment) : null;
        return e;
    }

    getVacationDays(): number {
        return Date.DaysBetween(this.initDate, this.endDate);
    }
}