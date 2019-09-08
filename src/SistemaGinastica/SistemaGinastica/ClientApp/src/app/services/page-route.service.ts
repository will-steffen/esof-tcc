import { Injectable } from "@angular/core";
import { I18n } from "../i18n";
import { PageRoute } from "../models/page-route";
import { UserService } from "./user.service";
import { UserType } from "../enums/user-type";
import { User } from "../models/user";
import { RouteConfig } from "../enums/route-config";
import { Router } from "@angular/router";

@Injectable()
export class PageRouteService {

    pageList: Array<PageRoute> = [];

    constructor(
        private i18n: I18n,
        private userService: UserService,
        private router: Router
    ) {
        this.setPages();
    }

    open(page: PageRoute) {
        this.router.navigate([page.route]);
    }

    setPages() {
        this.pageList = [];
        let user = this.userService.getUser();
        if(!user) return;

        this.appendPage(user, [], 
            new PageRoute('Clientes', RouteConfig.customer));

        this.appendPage(user, [UserType.ADMIN, UserType.RECEPCIONIST], 
            new PageRoute('Aulas em Grupo', RouteConfig.groupClass));

        this.appendPage(user, [UserType.ADMIN, UserType.RECEPCIONIST], 
            new PageRoute('Instrutores', RouteConfig.instructor));

        this.appendPage(user, [UserType.ADMIN], 
            new PageRoute('Usuários', RouteConfig.user));
    }

    appendPage(user: User, typeList: UserType[], page: PageRoute) {
        if(typeList.length == 0 || typeList.find(x => x == user.type)){
            this.pageList.push(page);
        }
    }

}