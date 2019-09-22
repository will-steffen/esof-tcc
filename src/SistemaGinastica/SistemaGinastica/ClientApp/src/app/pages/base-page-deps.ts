import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AlertHandler } from "../handlers/alert.handler";
import { BlockHandler } from "../handlers/block.handler";
import { LogHandler } from "../handlers/log.handler";
import { ServiceHandler } from "../handlers/service.handler";
import { PageRouteService } from "../services/page-route.service";
import { UserService } from "../services/user.service";

@Injectable()
export class BasePageDeps {
    constructor(
        public router: Router,
        public service: ServiceHandler,
        public logger: LogHandler,
        public userService: UserService,
        public block: BlockHandler,
        public alert: AlertHandler,
        public pageRouteService: PageRouteService
    ) { }
}