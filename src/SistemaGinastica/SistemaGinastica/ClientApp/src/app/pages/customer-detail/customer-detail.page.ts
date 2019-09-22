import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiRoute } from "src/app/enums/api-route";
import { Customer } from "src/app/models/customer";
import { CustomerForm } from "src/app/models/forms/customer.form";
import { CustomerService } from "src/app/services/customer.service";
import { BaseDetailPage } from "../base-detail-page";
import { BasePageDeps } from "../base-page-deps";

@Component({
    selector: 'app-customer-detail',
    templateUrl: './customer-detail.page.html',
    styleUrls: ['./customer-detail.page.less']
})
export class CustomerDetailPage extends BaseDetailPage<Customer, CustomerForm>{
    id: number;
    constructor(
        deps: BasePageDeps,
        activatedRoute: ActivatedRoute,
        private customerService: CustomerService
    ) {
        super(deps, Customer, CustomerForm, ApiRoute.customer.default);
        this.title = this.i18n.t.customer.titleDetail;
        this.id = Number(activatedRoute.snapshot.paramMap.get('id'));
        if (this.id) {
            this.customerService.getById(this.id)
                .then(model => this.form.Model(model));
        } else {
            this.form.Model(null);
        }
    }
}