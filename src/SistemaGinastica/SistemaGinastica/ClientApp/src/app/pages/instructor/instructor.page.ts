import { Component } from "@angular/core";
import { Instructor } from "src/app/models/instructor";
import { InstructorForm } from "src/app/models/forms/instructor.form";
import { BaseFilterPage } from "../base-filter-page";
import { BasePageDeps } from "../base-page-deps";
import { ApiRoute } from "src/app/enums/api-route";
import { InstructorField } from "src/app/enums/instructor-field";
import { FormInputType } from "src/app/models/forms/base/form-input-type";
import { Icon } from "src/app/enums/icon";
import { FormInputOptions } from "src/app/models/forms/base/form-input-options";

@Component({
    selector: 'app-instructor',
    templateUrl: './instructor.page.html',
    styleUrls: ['./instructor.page.less']
})
export class InstructorPage extends BaseFilterPage<Instructor, InstructorForm> {
    constructor(
        deps: BasePageDeps
    ){ super(deps, Instructor, InstructorForm, ApiRoute.instructor.filter, ApiRoute.instructor.default) }

    createFilter() {       
        this.filter.CreateField(this.i18n.t.instructor.authorizedGroupClass, InstructorField.AUTHORIZED_GROUP_CLASS)
            .Options(FormInputOptions.boolean(), true);

        this.filter.CreateField(this.i18n.t.instructor.authorizedMuscle, InstructorField.AUTHORIZED_MUSCLE)
            .Options(FormInputOptions.boolean(), true);
            
        this.filter.CreateField(this.i18n.t.personData.name, InstructorField.NAME);
        this.filter.CreateField(this.i18n.t.personData.rg, InstructorField.RG);
        this.filter.CreateField(this.i18n.t.personData.cpf, InstructorField.CPF); 
    }

    createTable() {
        this.table.Action(Icon.edit, model => this.edit(model));        

        this.table.Column()
            .Label(this.i18n.t.instructor.authorizedGroupClass)
            .OrderBy(InstructorField.AUTHORIZED_GROUP_CLASS)
            .Value(x => x.authorizedGroupClass ? this.i18n.t.label.yes : this.i18n.t.label.no);

        this.table.Column()
            .Label(this.i18n.t.instructor.authorizedMuscle)
            .OrderBy(InstructorField.AUTHORIZED_MUSCLE)
            .Value(x => x.authorizedMuscle ? this.i18n.t.label.yes : this.i18n.t.label.no);

        this.table.Column()
            .Label(this.i18n.t.personData.name)
            .OrderBy(InstructorField.NAME)
            .Value(x => x.name);

        this.table.Column()
            .Label(this.i18n.t.personData.rg)
            .OrderBy(InstructorField.RG)
            .Value(x => x.rg);

        this.table.Column()
            .Label(this.i18n.t.personData.cpf)
            .OrderBy(InstructorField.CPF)
            .Value(x => x.cpf);
    }
}