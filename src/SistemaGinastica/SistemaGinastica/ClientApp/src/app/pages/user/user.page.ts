import { Component } from "@angular/core";
import { ApiRoute } from "src/app/enums/api-route";
import { HttpStatus } from "src/app/enums/http-status";
import { Icon } from "src/app/enums/icon";
import { UserField } from "src/app/enums/user-field";
import { UserType } from "src/app/enums/user-type";
import { FormInputOptions } from "src/app/models/forms/base/form-input-options";
import { UserForm } from "src/app/models/forms/user.form";
import { User } from "src/app/models/user";
import { BaseFilterPage } from "../base-filter-page";
import { BasePageDeps } from "../base-page-deps";

@Component({
    selector: 'app-user',
    templateUrl: './user.page.html',
    styleUrls: ['./user.page.less']
})
export class UserPage extends BaseFilterPage<User, UserForm> {
    constructor(
        deps: BasePageDeps
    ) {
        super(deps, User, UserForm, ApiRoute.user.filter, ApiRoute.user.default);
        this.title = this.i18n.t.user.title;
        this.errorMessageMap[HttpStatus.FAILED_DEPENDENCY] = this.i18n.t.user.message.notFound;
        this.errorMessageMap[HttpStatus.CONFLICT] = this.i18n.t.user.message.usernameNotUnique;
    }

    createFilter() {
        this.filter.CreateField(this.i18n.t.user.username, UserField.USERNAME);
        this.filter.CreateField(this.i18n.t.user.username, UserField.TYPE)
            .Options(FormInputOptions.fromEnum(UserType, this.i18n.t.enum.UserType), true);
        this.filter.CreateField(this.i18n.t.personData.name, UserField.NAME);
        this.filter.CreateField(this.i18n.t.personData.rg, UserField.RG);
        this.filter.CreateField(this.i18n.t.personData.cpf, UserField.CPF);
    }

    createTable() {
        this.table.Action(Icon.edit, model => this.edit(model)).Tooltip(this.i18n.t.label.edit);
        this.table.Action(Icon.delete, model => this.delete(model)).Tooltip(this.i18n.t.label.delete);

        this.table.Column()
            .Label(this.i18n.t.user.username)
            .OrderBy(UserField.USERNAME)
            .Value(x => x.username);            

        this.table.Column()
            .Label(this.i18n.t.user.type)
            .OrderBy(UserField.TYPE)
            .Value(x => this.i18n.t.enum.UserType[x.type])
            .Priority(4);

        this.table.Column()
            .Label(this.i18n.t.personData.name)
            .OrderBy(UserField.NAME)
            .Value(x => x.name)
            .Priority(2);

        this.table.Column()
            .Label(this.i18n.t.personData.rg)
            .OrderBy(UserField.RG)
            .Value(x => x.rg)
            .Priority(6);

        this.table.Column()
            .Label(this.i18n.t.personData.cpf)
            .OrderBy(UserField.CPF)
            .Value(x => x.cpf)
            .Priority(5);
    }
}