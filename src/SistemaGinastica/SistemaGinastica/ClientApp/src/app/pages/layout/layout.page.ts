import { Component } from "@angular/core";
import { PageType } from "src/app/enums/page-type";
import { PageRouteService } from "src/app/services/page-route.service";
import { BasePage } from "../base-page";
import { BasePageDeps } from "../base-page-deps";
import { User } from "src/app/models/user";
import { SystemService } from "src/app/services/system.service";
import { SystemConfigForm } from "src/app/models/forms/system-config.form";
import { FormInput } from "src/app/models/forms/base/form-input";
import { FormInputOptions } from "src/app/models/forms/base/form-input-options";
import { Language } from "src/app/enums/language";
import { PageRoute } from "src/app/models/page-route";

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
    language: FormInput<Language>;
    showSystemConfig = false;
    systemForm = new SystemConfigForm();
    showMock = false;
    mockResult: string;

    constructor(
        public pageRouteService: PageRouteService,
        public systemService: SystemService,
        deps: BasePageDeps
    ) {
        super(deps);
        this.user = this.userService.getUser();
        this.language = new FormInput<Language>(this.i18n.t.label.selectLanguage, Language.PTBR)
            .Options([
                new FormInputOptions(Language.PTBR, 'Português'),
                new FormInputOptions(Language.EN, 'English'),
            ]);
    }

    openPage(page: PageRoute) {
        if(document.body.offsetWidth <= 650){
            this.showMenu = false;
        }
        this.pageRouteService.open(page)
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

    saveLanguage() {
        this.block.start();
        this.i18n.changeLanguage(this.language.value);
        window.location.reload();
    }

    openMock() {
        this.showMock = true;
    }

    execMock() {
        this.block.start()
        this.systemService.runMock()
            .then(data => {
                this.systemService.mocked = true;
                this.mockResult = data.result;
                this.showMock = false;
                setTimeout(() => this.showMock = true, 100);
            })
            .catch(err => this.alert.error('Erro no Mock'))
            .then(() => this.block.stop());
    }
}
