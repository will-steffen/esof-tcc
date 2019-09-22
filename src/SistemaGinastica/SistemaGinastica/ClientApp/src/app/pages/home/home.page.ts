import { Component } from "@angular/core";
import { BasePage } from "../base-page";
import { BasePageDeps } from "../base-page-deps";

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.less']
})
export class HomePage extends BasePage {
    constructor(deps: BasePageDeps) {
        super(deps);
        this.title = this.i18n.t.home.title;
    }
}