import { Component } from "@angular/core";
import { PageType } from "src/app/enums/page-type";
import { PageRouteService } from "src/app/services/page-route.service";
import { BasePage } from "../base-page";
import { BasePageDeps } from "../base-page-deps";
import { User } from "src/app/models/user";

@Component({
    selector: 'app-layout',
    templateUrl: './layout.page.html',
    styleUrls: ['./layout.page.less']
})
export class LayoutPage extends BasePage {
    showMenu = false;
    PageType = PageType;
    user: User;
    constructor(
        public pageRouteService: PageRouteService,
        deps: BasePageDeps
    ) { 
        super(deps);
        this.user = this.userService.getUser();
    }

    logout() {
        this.alert.confirm(this.i18n.t.label.confirmLogout)
            .then(() => {
                this.userService.logout();
                this.pageRouteService.goToLogin();
            })
            .catch(() => { });
    }

    toggleMenu() {
        this.showMenu = !this.showMenu;
    }
}