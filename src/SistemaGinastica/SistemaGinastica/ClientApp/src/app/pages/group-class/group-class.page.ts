import { Component } from "@angular/core";
import { ApiRoute } from "src/app/enums/api-route";
import { GroupClassField } from "src/app/enums/group-class-field";
import { Icon } from "src/app/enums/icon";
import { FormInputOptions } from "src/app/models/forms/base/form-input-options";
import { GroupClassForm } from "src/app/models/forms/group-class.form";
import { GroupClass } from "src/app/models/group-class";
import { InstructorService } from "src/app/services/instructor.service";
import { BaseFilterPage } from "../base-filter-page";
import { BasePageDeps } from "../base-page-deps";

@Component({
    selector: 'app-group-class',
    templateUrl: './group-class.page.html',
    styleUrls: ['./group-class.page.less']
})
export class GroupClassPage extends BaseFilterPage<GroupClass, GroupClassForm> {
    constructor(
        deps: BasePageDeps,
        private instructorService: InstructorService
    ) {
        super(deps, GroupClass, GroupClassForm, ApiRoute.groupClass.filter, ApiRoute.groupClass.default);
        this.title = this.i18n.t.groupClass.title;
    }

    loadScreenDeps(): Promise<void> {
        return new Promise(res => {
            this.instructorService.getGroupClassList()
                .then(instructorList => this.form.deps(instructorList))
                .catch(err => { })
                .then(() => res());
        });
    }

    createFilter() {
        this.filter.CreateField(this.i18n.t.groupClass.name, GroupClassField.NAME);
        this.filter.CreateField(this.i18n.t.groupClass.instructor, GroupClassField.INSTRUCTOR)
            .Options(this.form.instructorList.map(x => new FormInputOptions(x.id, x.name)), true)
        this.filter.CreateField(this.i18n.t.groupClass.room, GroupClassField.ROOM);

    }


    createTable() {
        this.table.Action(Icon.edit, model => this.edit(model));
        this.table.Action(Icon.delete, model => this.delete(model));

        this.table.Column()
            .Label(this.i18n.t.groupClass.name)
            .OrderBy(GroupClassField.NAME)
            .Value(x => x.name);

        this.table.Column()
            .Label(this.i18n.t.groupClass.instructor)
            .OrderBy(GroupClassField.INSTRUCTOR)
            .Value(x => x.instructor ? x.instructor.name : '-');

        this.table.Column()
            .Label(this.i18n.t.groupClass.room)
            .OrderBy(GroupClassField.ROOM)
            .Value(x => x.room);

        this.table.Column()
            .Label(this.i18n.t.groupClass.initHour)
            .OrderBy(GroupClassField.INIT_HOUR)
            .Value(x => x.initHour.getHours() + ':' + x.initHour.getMinutes());

        this.table.Column()
            .Label(this.i18n.t.groupClass.endHour)
            .OrderBy(GroupClassField.END_HOUR)
            .Value(x => x.endHour.getHours() + ':' + x.endHour.getMinutes());
    }
}