import { BaseForm } from "./base/base-form";
import { User } from "../user";
import { FormInput } from "./base/form-input";
import { UserType } from "src/app/enums/user-type";
import { PersonDataModelForm } from "./person-data.form";
import { FormInputOptions } from "./base/form-input-options";
import { FormInputType } from "./base/form-input-type";

export class UserForm extends BaseForm<User> {
    type: FormInput<UserType>;
    username: FormInput<string>;
    password: FormInput<string>;
    personData: PersonDataModelForm = new PersonDataModelForm();

    configure() {
        this.type = this.Input<UserType>(this.i18n.t.user.type)
            .Options(FormInputOptions.fromEnum(UserType, this.i18n.t.enum.UserType), true)
            .Required();

        this.username = this.Input<string>(this.i18n.t.user.username).Required();
        this.password = this.Input<string>(this.i18n.t.user.password).Type(FormInputType.PASSWORD);
        this.SubForm(this.personData).Model(this.model);

        if(this.model){
            this.username.SetValue(this.model.username);
            this.type.SetValue(this.model.type);
        }
    }

    getDTO() : User {
        let dto = this.personData.getDTO(new User());
        dto.type = this.type.value;
        dto.username = this.username.value;
        dto.password = this.password.value;
        return dto;
    }
    
}