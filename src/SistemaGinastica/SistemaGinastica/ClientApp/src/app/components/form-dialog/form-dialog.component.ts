import { Component, Input } from "@angular/core";
import { BaseFilterPage } from "src/app/pages/base-filter-page";
import { BaseEntity } from "src/app/models/base-entity";
import { BaseForm } from "src/app/models/forms/base/base-form";
import { Icon } from "src/app/enums/icon";
import { I18n } from "src/app/i18n";

@Component({
    selector: 'g-form-dialog',
    templateUrl: './form-dialog.component.html',
    styleUrls: ['./form-dialog.component.less']
})
export class FormDialogComponent {
    @Input() page: BaseFilterPage<BaseEntity, BaseForm<BaseEntity>>;
    @Input() styleClass: string = 'modal-md';
    @Input() title: string = '';

    icon = Icon;
    constructor(public i18n: I18n) { }

    closeDetails() {
        this.page.closeDetails();
    }

    save() {
        this.page.save();
    }

    delete() {
        this.page.delete(this.page.form.model);
    }

    getCancelButtonLabel() {        
        return this.i18n.t.label.cancel;
    }

}