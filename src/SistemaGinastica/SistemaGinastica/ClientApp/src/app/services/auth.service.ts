import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { RouteConfig } from "../enums/route-config";
import { ServiceHandler } from "../handlers/service.handler";
import { UserService } from "./user.service";
import { ApiRoute } from "../enums/api-route";
import { User } from "../models/user";
import { LoginRequestDTO } from "../dto/login-request.dto";
import { LoginResponseDTO } from "../dto/login-response.dto";

@Injectable()
export class AuthService implements CanActivate {

    constructor(
        private service: ServiceHandler,
        private userService: UserService, 
        private router: Router, 
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        return new Promise(res => {
            let user = this.userService.getUser();
            if (route.routeConfig.path == RouteConfig.login) {
                this.canNavigateLogin(user, res);
            } else if (route.routeConfig.path.indexOf(RouteConfig.app) == 0) {
                this.canNavigateApp(user, res);
            } else {
                res(true);
            }
        });
    }

    private canNavigateLogin(user: User, res): void {
        if (!user) {
            res(true);
        } else {
            this.service.Get(ApiRoute.auth)
                .then(() => {
                    this.router.navigate([RouteConfig.app]);
                    res(false);
                })
                .catch(() => {
                    res(true);
                    this.userService.logout();
                });
        }
    }

    private canNavigateApp(user: User, res): void {
        if (!user) {
            this.router.navigate([RouteConfig.login]);
            res(false);
        } else {
            this.service.Get(ApiRoute.auth)
                .then(() => {
                    res(true);
                })
                .catch(() => {
                    this.router.navigate([RouteConfig.login]);
                    res(false);
                });
        }
    }

    login(authInfo: LoginRequestDTO): Promise<LoginResponseDTO> {
        return new Promise((resolve, reject) => {
            this.service.Post(ApiRoute.auth, authInfo)
                .then(data => resolve(LoginRequestDTO.fromData(data)))
                .catch(err => reject(err));
        });
    }

}