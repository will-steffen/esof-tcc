import { Component } from "@angular/core";
import { ApiRoute } from "src/app/enums/api-route";
import { GroupClassForm } from "src/app/models/forms/group-class.form";
import { GroupClass } from "src/app/models/group-class";
import { BaseFilterPage } from "../base-filter-page";
import { BasePageDeps } from "../base-page-deps";

@Component({
    selector: 'app-group-class',
    templateUrl: './group-class.page.html',
    styleUrls: ['./group-class.page.less']
})
export class GroupClassPage extends BaseFilterPage<GroupClass, GroupClassForm> {
    constructor(
        deps: BasePageDeps
    ) { super(deps, GroupClass, GroupClassForm, ApiRoute.groupClass.filter, ApiRoute.groupClass.default) }
}