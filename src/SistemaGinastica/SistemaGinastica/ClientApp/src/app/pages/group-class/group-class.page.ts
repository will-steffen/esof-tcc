import { Component } from "@angular/core";
import { ApiRoute } from "src/app/enums/api-route";
import { GroupClassField } from "src/app/enums/group-class-field";
import { Icon } from "src/app/enums/icon";
import { WeekDay } from "src/app/enums/week-day";
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
            .Options(this.form.instructorList.map(x => new FormInputOptions(x.id, x.name)), true);
        this.filter.CreateField(this.i18n.t.groupClass.room, GroupClassField.ROOM);
        this.filter.CreateField(this.i18n.t.groupClass.weekDay, GroupClassField.WEEK_DAY)
            .Options(FormInputOptions.fromEnum(WeekDay, this.i18n.t.enum.WeekDay), true);
        this.filter.CreateField(this.i18n.t.label.active, GroupClassField.ACTIVE)
            .Options(FormInputOptions.boolean(), true)
            .DefaultValue(true);
    }


    createTable() {
        this.table.Action(Icon.edit, model => this.edit(model)).Tooltip(this.i18n.t.label.edit);
        this.table.Action(Icon.delete, model => this.delete(model)).Tooltip(this.i18n.t.label.delete);

        this.table.Column()
            .Label(this.i18n.t.groupClass.name)
            .OrderBy(GroupClassField.NAME)
            .Value(x => x.name)

        this.table.Column()
            .Label(this.i18n.t.groupClass.instructor)
            .OrderBy(GroupClassField.INSTRUCTOR)
            .Value(x => x.instructor ? x.instructor.name : '-')
            .Priority(6);

        this.table.Column()
            .Label(this.i18n.t.groupClass.room)
            .OrderBy(GroupClassField.ROOM)
            .Value(x => x.room)
            .Priority(5);

        this.table.Column()
            .Label(this.i18n.t.groupClass.initHour)
            .OrderBy(GroupClassField.INIT_HOUR)
            .Value(x => x.initHour.ToOnlyTimeString())
            .Priority(2);

        this.table.Column()
            .Label(this.i18n.t.groupClass.endHour)
            .OrderBy(GroupClassField.END_HOUR)
            .Value(x => x.endHour.ToOnlyTimeString())
            .Priority(3);

        this.table.Column()
            .Label(this.i18n.t.groupClass.weekDay)
            .Value(x => x.weekDayList.map(x => this.i18n.t.enum.WeekDay[x]).join(', '))
            .Priority(4);

        this.table.Column()
            .Label(this.i18n.t.label.active)
            .OrderBy(GroupClassField.ACTIVE)
            .Value(x => x.active ? this.i18n.t.label.yes : this.i18n.t.label.no)
            .Priority(5);
    }
}