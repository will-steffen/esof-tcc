import { BaseEntity } from "./base-entity";
import { Instructor } from "./instructor";
import { WeekDay } from "../enums/week-day";

export class GroupClass extends BaseEntity {
    initHour: Date;
    endHour: Date;
    room: string;
    idInstructor: number;
    instructor: Instructor;
    name: string;
    weekDayList: WeekDay[];

    static fromData(data) {
        let e: GroupClass = super.fromData(data);
        e.initHour = e.initHour ? new Date(e.initHour) : null;
        e.endHour = e.endHour ? new Date(e.endHour) : null;
        e.instructor = e.instructor ? Instructor.fromData(e.instructor) : null;
        return e;
    }
}