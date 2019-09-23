import { Component, EventEmitter, Input, Output } from "@angular/core";
import { I18n } from "src/app/i18n";
import { FormInput } from "src/app/models/forms/base/form-input";
import { FormInputType } from "src/app/models/forms/base/form-input-type";



@Component({
    selector: 'g-form-input',
    templateUrl: './form-input.component.html',
    styleUrls: ['./form-input.component.less']
})
export class FormInputComponent {
    FormInputType = FormInputType;
    @Input() input: FormInput<any>;
    @Output('enterKey') enterKey = new EventEmitter();

    constructor(public i18n: I18n) { }

    onEnterKey() {
        if (this.enterKey.observers.length > 0) this.enterKey.emit("enterKey");
    }

    getLabel() {
        return this.input.label;
    }

    getPlaceholder() {
        return this.i18n.t.label.select;
    }

    showInvalidClass() {
        return this.input.showValidation && this.input.getErrorMessage();
    }
}