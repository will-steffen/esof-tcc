import { Component } from "@angular/core";
import { BaseFilterPage } from "../base-filter-page";
import { User } from "src/app/models/user";
import { UserForm } from "src/app/models/forms/user.form";
import { BasePageDeps } from "../base-page-deps";
import { ApiRoute } from "src/app/enums/api-route";

@Component({
    selector: 'app-user',
    templateUrl: './user.page.html',
    styleUrls: ['./user.page.less']
})
export class UserPage extends BaseFilterPage<User, UserForm> {
    constructor(
        deps: BasePageDeps
    ){ super(deps, User, UserForm, ApiRoute.user.filter, ApiRoute.user.default) }
}