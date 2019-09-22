import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Icon } from "../enums/icon";
import { RouteConfig } from "../enums/route-config";
import { UserType } from "../enums/user-type";
import { I18n } from "../i18n";
import { PageRoute } from "../models/page-route";
import { User } from "../models/user";
import { BasePage } from "../pages/base-page";
import { UserService } from "./user.service";

@Injectable()
export class PageRouteService {

    pageList: Array<PageRoute> = [];
    currentPage: BasePage;
    statePages: BasePage[] = [];

    constructor(
        private i18n: I18n,
        private userService: UserService,
        private router: Router
    ) {
        this.setPages();
    }

    open(page: PageRoute) {
        this.statePages = [];
        this.router.navigate([page.route]);
    }

    goToHome() {
        this.router.navigate([RouteConfig.app]);
    }

    goToLogin() {
        this.router.navigate([RouteConfig.login]);
    }

    setPages() {
        this.pageList = [];
        let user = this.userService.getUser();
        if (!user) return;

        this.appendPage(user, [],
            new PageRoute(this.i18n.t.customer.title, RouteConfig.customer, Icon.users));

        this.appendPage(user, [UserType.ADMIN, UserType.RECEPCIONIST],
            new PageRoute(this.i18n.t.groupClass.title, RouteConfig.groupClass, Icon.peopleCarry));

        this.appendPage(user, [UserType.ADMIN, UserType.RECEPCIONIST],
            new PageRoute(this.i18n.t.instructor.title, RouteConfig.instructor, Icon.teacher));

        this.appendPage(user, [UserType.ADMIN],
            new PageRoute(this.i18n.t.user.title, RouteConfig.user, Icon.userLock));
    }

    appendPage(user: User, typeList: UserType[], page: PageRoute) {
        if (typeList.length == 0 || typeList.find(x => x == user.type)) {
            this.pageList.push(page);
        }
    }

    getPageTitle() {
        return this.currentPage ? this.currentPage.title : '';
    }

    setCurrentPage(page: BasePage) {
        let recoveredPage = this.statePages.find(p => p.constructor.name == page.constructor.name);
        if (recoveredPage) {
            page = Object.assign(page, recoveredPage);
            page.recoveredState = true;
        }
        this.currentPage = page;
    }

    navigate(originPage: BasePage, ...params: Array<string | number>) {
        this.statePages.push(originPage)
        this.router.navigate(params);
    }

}