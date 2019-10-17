import { BaseForm } from "./base/base-form";
import { FormInput } from "./base/form-input";
import { Payment } from "../payment";
import { FormInputType } from "./base/form-input-type";

export class PaymentForm extends BaseForm<Payment> {
    date: FormInput<Date>;
    value: FormInput<string>;

    configure() {
        this.date = this.Input<Date>(this.i18n.t.payment.date)
            .Type(FormInputType.DATE)
            .Required();

        this.value = this.Input<string>(this.i18n.t.payment.value)
            .Type(FormInputType.NUMBER)
            .Validation(this.i18n.t.payment.message.mustValuePositive, 
                () => this.value.value && Number(this.value.value) > 0)
            .Required(); 
    }

    getDTO(): Payment {
        let dto = new Payment();
        dto.paymentDate = this.date.value;
        dto.value = Number(this.value.value);
        return dto;
    }
}