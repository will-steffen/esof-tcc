import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ServiceHandler } from "../handlers/service.handler";
import { LogHandler } from "../handlers/log.handler";
import { UserService } from "../services/user.service";
import { AlertHandler } from "../handlers/alert.handler";
import { BlockHandler } from "../handlers/block.handler";
import { PageRouteService } from "../services/page-route.service";

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
    ){}
}