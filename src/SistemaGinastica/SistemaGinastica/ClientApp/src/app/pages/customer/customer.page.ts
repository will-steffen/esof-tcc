import { Component } from "@angular/core";
import { Customer } from "src/app/models/customer";
import { CustomerForm } from "src/app/models/forms/customer.form";
import { BaseFilterPage } from "../base-filter-page";
import { BasePageDeps } from "../base-page-deps";
import { ApiRoute } from "src/app/enums/api-route";
import { RouteConfig } from "src/app/enums/route-config";
import { FormInputOptions } from "src/app/models/forms/base/form-input-options";
import { CustomerField } from "src/app/enums/customer-field";
import { Icon } from "src/app/enums/icon";

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

    edit(model: Customer) {
        this.pageRouteService.navigate(this, RouteConfig.customer, model ? model.id : 0);
    }

    createFilter() {       
        this.filter.CreateField(this.i18n.t.customer.annualPlan, CustomerField.ANNUAL_PLAN)
            .Options(FormInputOptions.boolean(), true);               
        this.filter.CreateField(this.i18n.t.customer.address, CustomerField.ADDRESS);
        this.filter.CreateField(this.i18n.t.customer.birthDate, CustomerField.BIRTH_DATE);
        this.filter.CreateField(this.i18n.t.customer.registration, CustomerField.REGISTRATION);

        this.filter.CreateField(this.i18n.t.personData.name, CustomerField.NAME);
        this.filter.CreateField(this.i18n.t.personData.rg, CustomerField.RG);
        this.filter.CreateField(this.i18n.t.personData.cpf, CustomerField.CPF); 
    }

    createTable() {
        this.table.Action(Icon.edit, model => this.edit(model));       
        this.table.Action(Icon.delete, model => this.delete(model));   

        this.table.Column()
            .Label(this.i18n.t.customer.annualPlan)
            .OrderBy(CustomerField.ANNUAL_PLAN)
            .Value(x => x.annualPlan ? this.i18n.t.label.yes : this.i18n.t.label.no);

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