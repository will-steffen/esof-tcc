import { BaseEntity } from "./base-entity";
import { Vacation } from "./vacation";

export class Payment extends BaseEntity {
    expectedDate: Date;
    paymentDate: Date;
    value: number;
    idCustomer: number;

    periodStartDate: Date;
    periodEndDate: Date;

    vacationList: Vacation[];

    static fromData(data) {
        let e: Payment = super.fromData(data);
        e.expectedDate = e.expectedDate ? new Date(e.expectedDate) : null;
        e.paymentDate = e.paymentDate ? new Date(e.paymentDate) : null;
        e.periodStartDate = e.periodStartDate ? new Date(e.periodStartDate) : null;
        e.periodEndDate = e.periodEndDate ? new Date(e.periodEndDate) : null;
        e.vacationList = e.vacationList ? e.vacationList.map(x => Vacation.fromData(x)) : [];
        e.vacationList.OrderBy(x => x.initDate);
        e.vacationList.forEach(x => x.payment = e);
        return e;
    }

    getVacationDaysLeft() {
        let maxDays = 30;
        if(!this.vacationList || !this.vacationList.length)
            return maxDays;
        let usedDays = this.getVacationDays();
        return maxDays - usedDays;
    }

    getVacationDays() {
        if(!this.vacationList || !this.vacationList.length) return 0;
        return this.vacationList.map(x => x.getVacationDays()).reduce((a, b) => a + b);
    }

    getPeriodsLeft() {
        let maxPeriods = 3;
        if(!this.vacationList) return maxPeriods;
        return maxPeriods - this.vacationList.length
    }
}