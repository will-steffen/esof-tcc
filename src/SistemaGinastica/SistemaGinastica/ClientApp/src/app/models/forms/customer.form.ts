import { Customer } from "../customer";
import { BaseForm } from "./base/base-form";
import { FormInput } from "./base/form-input";
import { FormInputType } from "./base/form-input-type";
import { PersonDataModelForm } from "./person-data.form";
import { PlanType } from "src/app/enums/plan-type";
import { FormInputOptions } from "./base/form-input-options";

export class CustomerForm extends BaseForm<Customer> {
    address: FormInput<string>;
    birthDate: FormInput<Date>;
    planType: FormInput<PlanType>;
    registration: FormInput<string>;
    planValue: FormInput<string>;
    personData: PersonDataModelForm = new PersonDataModelForm();

    configure() {
        this.address = this.Input<string>(this.i18n.t.customer.address).Required();
        this.birthDate = this.Input<Date>(this.i18n.t.customer.birthDate)
            .Type(FormInputType.DATE)
            .Required();

        this.planType = this.Input<PlanType>(this.i18n.t.customer.planType)            
        .Options(FormInputOptions.fromEnum(PlanType, this.i18n.t.enum.PlanType), true)
            .Required();

        this.registration = this.Input<string>(this.i18n.t.customer.registration).Required();
        this.planValue = this.Input<string>(this.i18n.t.customer.planValue)
            .Type(FormInputType.NUMBER)
            .Required();

        this.SubForm(this.personData).Model(this.model);

        if (this.model) {
            this.address.SetValue(this.model.address);
            this.birthDate.SetValue(this.model.birthDate);
            this.planType.SetValue(this.model.planType);
            this.registration.SetValue(this.model.registration);
            this.planValue.SetValue(this.model.planValue);
        }
    }

    getDTO(): Customer {
        let dto = this.personData.getDTO(new Customer());
        dto.address = this.address.value;
        dto.birthDate = this.birthDate.value;
        dto.planType = this.planType.value;
        dto.registration = this.registration.value;
        dto.planValue = Number(this.planValue.value);        
        return dto;
    }
}