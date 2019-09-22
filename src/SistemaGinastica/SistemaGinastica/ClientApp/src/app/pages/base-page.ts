
import { Router } from "@angular/router";
import { Icon } from "../enums/icon";
import { ServiceHandler } from "../handlers/service.handler";
import { LogHandler } from "../handlers/log.handler";
import { UserService } from "../services/user.service";
import { BlockHandler } from "../handlers/block.handler";
import { AlertHandler } from "../handlers/alert.handler";
import { I18n } from "../i18n";
import { BasePageDeps } from "./base-page-deps";
import { PageRouteService } from "../services/page-route.service";
import { PageType } from "../enums/page-type";

export class BasePage {
 
    router: Router;
    service: ServiceHandler;
    logger: LogHandler;
    userService: UserService;
    block: BlockHandler;
    alert: AlertHandler;
    icon = Icon;
    i18n: I18n;
    pageRouteService: PageRouteService;
    title: string;
    recoveredState;
    type: PageType;

    constructor(deps: BasePageDeps){  
        this.type = PageType.BASE;
        this.i18n = I18n.current;
        this.router = deps.router;
        this.service = deps.service;
        this.logger = deps.logger;
        this.userService = deps.userService;
        this.block = deps.block;
        this.alert = deps.alert;
        this.pageRouteService = deps.pageRouteService;
        deps.pageRouteService.setCurrentPage(this);
        if(!this.recoveredState){
            this.recoveredState = false;
            this.title = '';
        }
    }
}
