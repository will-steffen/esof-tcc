import { GroupClass } from "../group-class";
import { Instructor } from "../instructor";
import { BaseForm } from "./base/base-form";
import { FormInput } from "./base/form-input";
import { FormInputOptions } from "./base/form-input-options";
import { FormInputType } from "./base/form-input-type";

export class GroupClassForm extends BaseForm<GroupClass> {

    initHour: FormInput<Date>;
    endHour: FormInput<Date>;
    room: FormInput<string>;
    instructor: FormInput<string>;
    name: FormInput<string>;
    instructorList: Instructor[] = [];

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

        if (this.model) {
            this.initHour.SetValue(this.model.initHour);
            this.endHour.SetValue(this.model.endHour);
            this.room.SetValue(this.model.room);
            this.name.SetValue(this.model.name);
            this.instructor.SetValue(this.model.idInstructor);
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
        return dto;
    }
}