import { Component } from "@angular/core";
import { ApiRoute } from "src/app/enums/api-route";
import { CustomerField } from "src/app/enums/customer-field";
import { Icon } from "src/app/enums/icon";
import { PlanType } from "src/app/enums/plan-type";
import { Customer } from "src/app/models/customer";
import { FormInputOptions } from "src/app/models/forms/base/form-input-options";
import { CustomerForm } from "src/app/models/forms/customer.form";
import { PaymentForm } from "src/app/models/forms/payment.form";
import { CustomerService } from "src/app/services/customer.service";
import { BaseFilterPage } from "../base-filter-page";
import { BasePageDeps } from "../base-page-deps";
import { VacationForm } from "src/app/models/forms/vacation.form";
import { Payment } from "src/app/models/payment";

@Component({
    selector: 'app-customer',
    templateUrl: './customer.page.html',
    styleUrls: ['./customer.page.less']
})
export class CustomerPage extends BaseFilterPage<Customer, CustomerForm> {
    showPayment = false;
    showAddPayment = false;
    paymentForm = new PaymentForm();
    customerOnEditPayment: Customer;
    paymentOnEditVacation: Payment;

    vacationForm = new VacationForm();
    showVacation = false;
    showAddVacation = false;
    PlanType = PlanType;

    constructor(
        deps: BasePageDeps,
        private customerService: CustomerService
    ) {
        super(deps, Customer, CustomerForm, ApiRoute.customer.filter, ApiRoute.customer.default);
        this.title = this.i18n.t.customer.title;
    }

    createFilter() {
        this.filter.CreateField(this.i18n.t.customer.planType, CustomerField.PLAN_TYPE)
            .Options(FormInputOptions.fromEnum(PlanType, this.i18n.t.enum.PlanType), true);
        this.filter.CreateField(this.i18n.t.customer.address, CustomerField.ADDRESS);
        this.filter.CreateField(this.i18n.t.customer.birthDate, CustomerField.BIRTH_DATE);
        this.filter.CreateField(this.i18n.t.customer.registration, CustomerField.REGISTRATION);

        this.filter.CreateField(this.i18n.t.personData.name, CustomerField.NAME);
        this.filter.CreateField(this.i18n.t.personData.rg, CustomerField.RG);
        this.filter.CreateField(this.i18n.t.personData.cpf, CustomerField.CPF);
    }

    createTable() {

        this.table.Action(Icon.edit, model => this.edit(model))
            .Tooltip(this.i18n.t.label.edit);

        this.table.Action(Icon.creditCard, model => this.editPayment(model))
            .Tooltip(this.i18n.t.customer.payment);

        this.table.Action(Icon.delete, model => this.delete(model))
            .Tooltip(this.i18n.t.label.delete);


            
        this.table.Column()
            .Label(this.i18n.t.customer.registration)
            .OrderBy(CustomerField.REGISTRATION)
            .Value(x => x.registration);

        this.table.Column()
            .Label(this.i18n.t.personData.name)
            .OrderBy(CustomerField.NAME)
            .Value(x => x.name);

        this.table.Column()
            .Label(this.i18n.t.personData.cpf)
            .OrderBy(CustomerField.CPF)
            .Value(x => x.cpf);

        this.table.Column()
            .Label(this.i18n.t.customer.planType)
            .OrderBy(CustomerField.PLAN_TYPE)
            .Value(x => this.i18n.t.enum.PlanType[x.planType]);

        this.table.Column()
            .Label(this.i18n.t.customer.nextPayment)
            .OrderBy(CustomerField.NEXT_PAYMENT)
            .Value(x => x.nextPayment.expectedDate.toLocaleDateString())
            .StyleClass('late-payment', x => x.nextPayment.expectedDate.getTime() < Date.Now().getTime());
    }

    editPayment(customer: Customer) {
        this.customerOnEditPayment = customer;
        this.showPayment = true;
    }

    addPayment() {
        this.paymentForm.configure();
        this.paymentForm.date.SetValue(Date.Now());
        this.paymentForm.value.SetValue(this.customerOnEditPayment.planValue);
        this.showAddPayment = true;
    }

    savePayment() {
        let paymentData = this.paymentForm.getDTO();
        paymentData.id = this.customerOnEditPayment.nextPayment.id;
        paymentData.idCustomer = this.customerOnEditPayment.id;
        this.block.start();
        this.customerService.registerPayment(paymentData)
            .then(customer => {
                this.customerOnEditPayment = Object.assign(this.customerOnEditPayment, customer);
                this.editPayment(this.customerOnEditPayment);
                this.showAddPayment = false;;
            })
            .catch(err => this.alert.error(this.i18n.t.payment.message.generalError))
            .then(() => this.block.stop())     
    }

    editVacation(payment: Payment) {
        this.paymentOnEditVacation = payment;
        this.showPayment = false;
        this.showVacation = true;
    }

    closeVacation() {
        this.showVacation = false;
        this.showPayment = true;
    }

    addVacation() {
        this.vacationForm.deps(this.paymentOnEditVacation);
        this.vacationForm.configure();   
        this.showAddVacation = true;     
    }

    saveVacation() {
        this.block.start();
        this.customerService.registerVacation(this.vacationForm.getDTO())
            .then(customer => {
                this.customerOnEditPayment = Object.assign(this.customerOnEditPayment, customer);
                let payment = this.customerOnEditPayment.paymentList.First(x => x.id == this.vacationForm.payment.id);
                this.editVacation(payment);
                this.showAddVacation = false;
            })
            .catch(err => this.alert.error(this.i18n.t.payment.message.generalError))
            .then(() => this.block.stop());        
    }
}