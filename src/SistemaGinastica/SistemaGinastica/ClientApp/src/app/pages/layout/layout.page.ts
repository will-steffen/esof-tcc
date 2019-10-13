import { Component } from "@angular/core";
import { PageType } from "src/app/enums/page-type";
import { PageRouteService } from "src/app/services/page-route.service";
import { BasePage } from "../base-page";
import { BasePageDeps } from "../base-page-deps";
import { User } from "src/app/models/user";
import { SystemService } from "src/app/services/system.service";
import { SystemConfigForm } from "src/app/models/forms/system-config.form";

@Component({
    selector: 'app-layout',
    templateUrl: './layout.page.html',
    styleUrls: ['./layout.page.less']
})
export class LayoutPage extends BasePage {
    showMenu = false;
    PageType = PageType;
    user: User;
    showSelectlanguage = false;
    showSystemConfig = false;
    systemForm = new SystemConfigForm();

    constructor(
        public pageRouteService: PageRouteService,
        private systemService: SystemService,
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

    openSystemConfig() {
        this.systemForm.configure();
        this.showSystemConfig = true;
    }

    saveSystemConfig() {
        this.block.start();
        this.systemService.setConfig(this.systemForm.getDTO())
            .then(() => {
                window.location.reload();             
            }).catch(() => this.block.stop());
    }

    getSystemDate() {
        return Date.Now().toLocaleDateString();
    }
}
