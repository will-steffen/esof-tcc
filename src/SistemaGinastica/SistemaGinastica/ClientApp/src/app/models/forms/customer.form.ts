import { BaseForm } from "./base/base-form";
import { Customer } from "../customer";
import { FormInput } from "./base/form-input";
import { PersonDataModelForm } from "./person-data.form";
import { FormInputType } from "./base/form-input-type";

export class CustomerForm extends BaseForm<Customer> {
    address: FormInput<string>;
    birthDate: FormInput<Date>;
    annualPlan: FormInput<boolean>;
    registration: FormInput<string>;
    personData: PersonDataModelForm = new PersonDataModelForm();

    configure() { 
        this.address = this.Input<string>(this.i18n.t.customer.address).Required();
        this.birthDate = this.Input<Date>(this.i18n.t.customer.birthDate)
            .Type(FormInputType.DATE)
            .Required();

        this.annualPlan = this.Input<boolean>(this.i18n.t.customer.annualPlan)
            .Type(FormInputType.CHECKBOX)
            .Required();

        this.registration = this.Input<string>(this.i18n.t.customer.registration).Required();

        this.SubForm(this.personData).Model(this.model);

        if(this.model){
            this.address.SetValue(this.model.address);
            this.birthDate.SetValue(this.model.birthDate);
            this.annualPlan.SetValue(this.model.annualPlan);
            this.registration.SetValue(this.model.registration);
        }
    }

    getDTO() : Customer {
        let dto = this.personData.getDTO(new Customer());
        dto.address = this.address.value;
        dto.birthDate = this.birthDate.value;
        return dto;
    }
}