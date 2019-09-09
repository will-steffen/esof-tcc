import { Component } from "@angular/core";
import { Customer } from "src/app/models/customer";
import { CustomerForm } from "src/app/models/forms/customer.form";
import { BaseFilterPage } from "../base-filter-page";
import { BasePageDeps } from "../base-page-deps";
import { ApiRoute } from "src/app/enums/api-route";

@Component({
    selector: 'app-customer',
    templateUrl: './customer.page.html',
    styleUrls: ['./customer.page.less']
})
export class CustomerPage extends BaseFilterPage<Customer, CustomerForm> {
    constructor(
        deps: BasePageDeps
    ) { super(deps, Customer, CustomerForm, ApiRoute.customer.filter, ApiRoute.customer.default) }
}