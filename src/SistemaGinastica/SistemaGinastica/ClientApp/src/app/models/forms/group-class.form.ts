import { GroupClass } from "../group-class";
import { Instructor } from "../instructor";
import { BaseForm } from "./base/base-form";
import { FormInput } from "./base/form-input";
import { FormInputOptions } from "./base/form-input-options";
import { FormInputType } from "./base/form-input-type";
import { WeekDay } from "src/app/enums/week-day";

export class GroupClassForm extends BaseForm<GroupClass> {

    initHour: FormInput<Date>;
    endHour: FormInput<Date>;
    room: FormInput<string>;
    instructor: FormInput<string>;
    name: FormInput<string>;
    weekDay: FormInput<WeekDay[]>;
    instructorList: Instructor[] = [];
    active: FormInput<boolean>;

    deps(instructorList: Instructor[]) {
        this.instructorList = instructorList;
    }

    configure() {
        this.initHour = this.Input<Date>(this.i18n.t.groupClass.initHour)
            .Type(FormInputType.DATE_ONLY_TIME)
            .Required();

        this.endHour = this.Input<Date>(this.i18n.t.groupClass.endHour)
            .Type(FormInputType.DATE_ONLY_TIME)
            .Required();

        this.room = this.Input<string>(this.i18n.t.groupClass.room).Required();
        this.name = this.Input<string>(this.i18n.t.groupClass.name).Required();
        this.instructor = this.Input<string>(this.i18n.t.groupClass.instructor)
            .Options(this.instructorList.map(x => new FormInputOptions(x.id, x.name)), true);

        this.weekDay = this.Input<WeekDay[]>(this.i18n.t.groupClass.weekDay)
            .Options(FormInputOptions.fromEnum(WeekDay, this.i18n.t.enum.WeekDay), true)
            .Type(FormInputType.MULTI_SELECT);

        this.active = this.Input<boolean>(this.i18n.t.label.active)
            .Options(FormInputOptions.boolean())
            .Required();

        if (this.model) {
            this.initHour.SetValue(this.model.initHour);
            this.endHour.SetValue(this.model.endHour);
            this.room.SetValue(this.model.room);
            this.name.SetValue(this.model.name);
            this.instructor.SetValue(this.model.idInstructor);
            this.weekDay.SetValue(this.model.weekDayList);
            this.active.SetValue(this.model.active);
        }
    }

    getDTO(): GroupClass {
        let dto = new GroupClass();
        dto.id = this.model ? this.model.id : null;
        dto.initHour = this.initHour.value;
        dto.endHour = this.endHour.value;
        dto.room = this.room.value;
        dto.name = this.name.value;
        dto.idInstructor = Number(this.instructor.value);
        dto.weekDayList = this.weekDay.value;
        dto.active = this.active.value;
        return dto;
    }
}