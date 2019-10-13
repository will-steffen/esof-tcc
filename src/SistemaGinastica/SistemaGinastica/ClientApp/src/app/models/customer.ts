import { PersonDataModel } from "./person-data-model";
import { PlanType } from "../enums/plan-type";
import { Payment } from "./payment";

export class Customer extends PersonDataModel {
    address: string;
    birthDate: Date;
    planType: PlanType;
    registration: string;
    paymentList: Payment[];
    nextPayment: Payment;
    planValue: number;
    active: boolean;

    static fromData(data) {
        let e: Customer = super.fromData(data);
        e.birthDate = e.birthDate ? new Date(e.birthDate) : null;
        e.paymentList = e.paymentList ? e.paymentList.map(x => Payment.fromData(x)) : [];
        e.paymentList.OrderBy(x => x.periodStartDate);
        e.nextPayment = e.paymentList.First(x => !!x.expectedDate && !x.paymentDate);        
        return e;
    }

    getCurrentPaymentPeriod(): Payment {
        let time = new Date().getTime();
        return this.paymentList.First(x => x.periodStartDate.getTime() <= time && time <= x.periodEndDate.getTime());
    }
}
