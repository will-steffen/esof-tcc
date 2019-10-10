import { BaseEntity } from "./base-entity";

export class Vacation extends BaseEntity {
    initDate: Date;
    endDate: Date;

    static fromData(data) {
        let e: Vacation = super.fromData(data);
        e.initDate = e.initDate ? new Date(e.initDate) : null;
        e.endDate = e.endDate ? new Date(e.endDate) : null;
        return e;
    }
}