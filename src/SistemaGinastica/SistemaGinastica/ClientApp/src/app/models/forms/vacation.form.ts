import { BaseForm } from "./base/base-form";
import { FormInput } from "./base/form-input";
import { Payment } from "../payment";
import { FormInputType } from "./base/form-input-type";
import { Vacation } from "../vacation";

export class VacationForm extends BaseForm<Vacation> {

    initDate: FormInput<Date>;
    endDate: FormInput<Date>;
    daysQuantity: number = 0;

    payment: Payment;

    deps(payment: Payment) {
        this.payment = payment;
    }

    configure() {
        let minDate = this.payment.periodStartDate;
        if(this.payment.vacationList.Any()){
            minDate = this.payment.vacationList.Last().endDate;
        }
        if(minDate < Date.Now()){
            minDate = Date.Now();
        }
        this.initDate = this.Input<Date>(this.i18n.t.vacation.initDate)
            .Type(FormInputType.DATE)
            .OnChange(() => {
                this.endDate.SetValue('');  
                if (this.initDate.value) {     
                    let minEndDate =  this.initDate.value.Clone().AddDays(1);                          
                    this.endDate.MinDate(minEndDate);
                    let maxEndDate = this.initDate.value.Clone().AddDays(this.payment.getVacationDaysLeft());
                    this.endDate.MaxDate(maxEndDate);                 
                }
            })            
            .MinDate(minDate)
            .MaxDate(this.payment.periodEndDate)
            .Required();

        this.endDate = this.Input<Date>(this.i18n.t.vacation.endDate)
            .Type(FormInputType.DATE)
            .DisabledIf(() => !this.initDate.value)
            .OnChange(() => {
                if(this.initDate.value && this.endDate.value)
                    this.daysQuantity = Date.DaysBetween(this.initDate.value, this.endDate.value);
                else this.daysQuantity = 0;
            })
            .MinDate(minDate)
            .Required();

        if (this.model) {
            this.initDate.SetValue(this.model.initDate);
            this.endDate.SetValue(this.model.endDate);
        }
    }

    getDTO(): Vacation {
        let dto = new Vacation();
        dto.initDate = this.initDate.value;
        dto.endDate = this.endDate.value;
        dto.idPayment = this.payment.id;
        return dto;
    }
}