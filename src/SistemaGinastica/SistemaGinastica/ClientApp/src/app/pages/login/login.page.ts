import { Component } from "@angular/core";
import { LoginRequestDTO } from "src/app/dto/login-request.dto";
import { LoginResponseDTO } from "src/app/dto/login-response.dto";
import { RouteConfig } from "src/app/enums/route-config";
import { AuthService } from "src/app/services/auth.service";
import { BasePage } from "../base-page";
import { BasePageDeps } from "../base-page-deps";

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.less']
})
export class LoginPage extends BasePage {
    showValidation = true;
    username: string;
    password: string;

    constructor(
        deps: BasePageDeps,
        private authService: AuthService
    ) { super(deps) }

    login() {
        if (this.validUsername() && this.validPassword()) {
            this.block.start();
            this.authService.login(new LoginRequestDTO(this.username, this.password))
                .then((data: LoginResponseDTO) => {
                    this.userService.saveToken(data.token);
                    return this.userService.updateUserFromServer()
                })
                .then(() => {
                    this.pageRouteService.setPages();
                    this.router.navigate([RouteConfig.app]);
                })
                .catch(err => {
                    this.alert.error(this.i18n.t.login.error);
                })
                .then(() => this.block.stop());
        }
    }

    validUsername() {
        return !String.IsNullOrEmpty(this.username);
    }

    validPassword() {
        return !String.IsNullOrEmpty(this.username)
    }
}