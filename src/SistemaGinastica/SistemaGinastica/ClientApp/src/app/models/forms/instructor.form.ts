import { Instructor } from "../instructor";
import { BaseForm } from "./base/base-form";
import { FormInput } from "./base/form-input";
import { FormInputOptions } from "./base/form-input-options";
import { PersonDataModelForm } from "./person-data.form";

export class InstructorForm extends BaseForm<Instructor> {
    authorizedMuscle: FormInput<boolean>;
    authorizedGroupClass: FormInput<boolean>;
    personData: PersonDataModelForm = new PersonDataModelForm();

    configure() {
        this.authorizedMuscle = this.Input<boolean>(this.i18n.t.instructor.authorizedMuscle)
            .Options(FormInputOptions.boolean(), true)
            .Required();

        this.authorizedGroupClass = this.Input<boolean>(this.i18n.t.instructor.authorizedGroupClass)
            .Options(FormInputOptions.boolean(), true)
            .Required();

        this.SubForm(this.personData).Model(this.model);

        if (this.model) {
            this.authorizedMuscle.SetValue(this.model.authorizedMuscle);
            this.authorizedGroupClass.SetValue(this.model.authorizedGroupClass);
        }
    }

    getDTO(): Instructor {
        let dto = this.personData.getDTO(new Instructor());
        dto.authorizedMuscle = this.authorizedMuscle.value;
        dto.authorizedGroupClass = this.authorizedGroupClass.value;
        return dto;
    }
}