import { BaseForm } from "./base/base-form";
import { User } from "../user";
import { FormInput } from "./base/form-input";
import { UserType } from "src/app/enums/user-type";
import { PersonDataModelForm } from "./person-data.form";
import { FormInputOptions } from "./base/form-input-options";

export class UserForm extends BaseForm<User> {
    type: FormInput<UserType>;
    username: FormInput<string>;
    personData: PersonDataModelForm = new PersonDataModelForm();

    configure() {
        this.type = this.Input<UserType>(this.i18n.t.user.type)
            .Options(FormInputOptions.fromEnum(UserType, this.i18n.t.enum.UserType), true);

        this.username = this.Input(this.i18n.t.user.username);
        this.SubForm(this.personData).Model(this.model);

        if(this.model){
            this.username.SetValue(this.model.username);
            this.type.SetValue(this.model.type);
        }
    }

    getDTO() : User {
        let user = this.personData.getDTO(new User());
        user.type = this.type.value;
        user.username = this.username.value;
        return user;
    }
    
}