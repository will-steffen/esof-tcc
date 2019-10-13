import { Component, OnInit } from "@angular/core";
import { CustomerService } from "src/app/services/customer.service";
import { BasePage } from "../base-page";
import { BasePageDeps } from "../base-page-deps";
import { HomeCardData } from "./home-card/home-card.component";

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.less']
})
export class HomePage extends BasePage implements OnInit {

    customers: HomeCardData;
    exams: HomeCardData;
    payments: HomeCardData;

    constructor(
        deps: BasePageDeps,
        public customerService: CustomerService
    ) {
        super(deps);
        this.title = this.i18n.t.home.title;

        this.customers = new HomeCardData(
            this.i18n.t.home.customers.title,
            0, this.icon.users,
            this.i18n.t.home.customers.tooltip
        );

        this.exams = new HomeCardData(
            this.i18n.t.home.exams.title,
            0, this.icon.stethoscope,
            this.i18n.t.home.exams.tooltip
        );

        this.payments = new HomeCardData(
            this.i18n.t.home.payments.title,
            0, this.icon.latePayment,
            this.i18n.t.home.payments.tooltip
        );
    }

    ngOnInit() {
        this.block.start();
        this.customerService.getHomeData()
            .then(data => {
                this.customers.info = data.countCustomer;
                this.payments.info = data.countLatePayment;
            }).catch(() => { }).then(() => this.block.stop());
    }
}