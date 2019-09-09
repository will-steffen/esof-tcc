import { Component } from "@angular/core";
import { Instructor } from "src/app/models/instructor";
import { InstructorForm } from "src/app/models/forms/instructor.form";
import { BaseFilterPage } from "../base-filter-page";
import { BasePageDeps } from "../base-page-deps";
import { ApiRoute } from "src/app/enums/api-route";

@Component({
    selector: 'app-instructor',
    templateUrl: './instructor.page.html',
    styleUrls: ['./instructor.page.less']
})
export class InstructorPage extends BaseFilterPage<Instructor, InstructorForm> {
    constructor(
        deps: BasePageDeps
    ){ super(deps, Instructor, InstructorForm, ApiRoute.instructor.filter, ApiRoute.instructor.default) }
}