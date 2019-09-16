import { BaseForm } from "./base/base-form";
import { GroupClass } from "../group-class";
import { Instructor } from "../instructor";
import { FormInput } from "./base/form-input";
import { FormInputType } from "./base/form-input-type";
import { FormInputOptions } from "./base/form-input-options";

export class GroupClassForm extends BaseForm<GroupClass> {

    initHour: FormInput<Date>;
    endHour: FormInput<Date>;
    room: FormInput<string>;
    instructor: FormInput<string>;
    instructorList: Instructor[] = [];

    deps(instructorList: Instructor[]) {
        this.instructorList = instructorList;
    }

    configure() {
        this.initHour = this.Input<Date>(this.i18n.t.groupClass.initHour)
            .Type(FormInputType.DATE)
            .Required();

        this.endHour = this.Input<Date>(this.i18n.t.groupClass.endHour)
            .Type(FormInputType.DATE)
            .Required();

        this.room = this.Input<string>(this.i18n.t.groupClass.room).Required();
        this.instructor = this.Input<string>(this.i18n.t.groupClass.room)
            .Options(this.instructorList.map(x => new FormInputOptions(x.id, x.name)))
            .Required();

        if (this.model) {
            this.initHour.SetValue(this.model.initHour);
            this.endHour.SetValue(this.model.endHour);
            this.room.SetValue(this.model.room);
            this.instructor.SetValue(this.model.instructor);
        }
    }

    getDTO(): GroupClass {
        let dto = new GroupClass();
        dto.id = this.model ? this.model.id : null;
        dto.initHour = this.initHour.value;
        dto.endHour = this.endHour.value;
        dto.room = this.room.value;
        dto.idInstructor = Number(this.instructor.value);
        return dto;
    }
}