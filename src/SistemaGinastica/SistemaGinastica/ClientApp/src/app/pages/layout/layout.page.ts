import { Component } from "@angular/core";
import { PageType } from "src/app/enums/page-type";
import { PageRouteService } from "src/app/services/page-route.service";
import { BasePage } from "../base-page";
import { BasePageDeps } from "../base-page-deps";

@Component({
    selector: 'app-layout',
    templateUrl: './layout.page.html',
    styleUrls: ['./layout.page.less']
})
export class LayoutPage extends BasePage {
    showMenu = false;
    PageType = PageType;
    constructor(
        public pageRouteService: PageRouteService,
        deps: BasePageDeps
    ) { super(deps); }

    logout() {
        this.userService.logout();
        this.pageRouteService.goToLogin();
    }

    toggleMenu() {
        this.showMenu = !this.showMenu;
    }
}