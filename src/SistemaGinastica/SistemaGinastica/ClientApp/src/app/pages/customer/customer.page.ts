import { Component } from "@angular/core";
import { ApiRoute } from "src/app/enums/api-route";
import { CustomerField } from "src/app/enums/customer-field";
import { Icon } from "src/app/enums/icon";
import { RouteConfig } from "src/app/enums/route-config";
import { Customer } from "src/app/models/customer";
import { FormInputOptions } from "src/app/models/forms/base/form-input-options";
import { CustomerForm } from "src/app/models/forms/customer.form";
import { BaseFilterPage } from "../base-filter-page";
import { BasePageDeps } from "../base-page-deps";
import { PlanType } from "src/app/enums/plan-type";

@Component({
    selector: 'app-customer',
    templateUrl: './customer.page.html',
    styleUrls: ['./customer.page.less']
})
export class CustomerPage extends BaseFilterPage<Customer, CustomerForm> {
    constructor(
        deps: BasePageDeps
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
        this.table.Action(Icon.edit, model => this.edit(model));
        this.table.Action(Icon.creditCard, model => this.edit(model));
        this.table.Action(Icon.delete, model => this.delete(model));        

        this.table.Column()
            .Label(this.i18n.t.customer.planType)
            .OrderBy(CustomerField.PLAN_TYPE)
            .Value(x => this.i18n.t.enum.PlanType[x.planType]);

        this.table.Column()
            .Label(this.i18n.t.customer.address)
            .OrderBy(CustomerField.ADDRESS)
            .Value(x => x.address);

        this.table.Column()
            .Label(this.i18n.t.customer.birthDate)
            .OrderBy(CustomerField.BIRTH_DATE)
            .Value(x => x.birthDate.toLocaleDateString());

        this.table.Column()
            .Label(this.i18n.t.customer.registration)
            .OrderBy(CustomerField.REGISTRATION)
            .Value(x => x.registration);

        this.table.Column()
            .Label(this.i18n.t.personData.name)
            .OrderBy(CustomerField.NAME)
            .Value(x => x.name);

        this.table.Column()
            .Label(this.i18n.t.personData.rg)
            .OrderBy(CustomerField.RG)
            .Value(x => x.rg);

        this.table.Column()
            .Label(this.i18n.t.personData.cpf)
            .OrderBy(CustomerField.CPF)
            .Value(x => x.cpf);
    }
}