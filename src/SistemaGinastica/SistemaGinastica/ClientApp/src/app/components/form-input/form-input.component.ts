import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormInput } from "src/app/models/forms/base/form-input";
import { FormInputType } from "src/app/models/forms/base/form-input-type";



@Component({
    selector: 'lb-form-input',
    templateUrl: './form-input.component.html',
    styleUrls: ['./form-input.component.less']
})
export class FormInputComponent {    
    FormInputType = FormInputType;
    @Input() input: FormInput<any>;  
    @Output('enterKey') enterKey = new EventEmitter();


    onEnterKey() {
        if (this.enterKey.observers.length > 0) this.enterKey.emit("enterKey");
    }
    
    getLabel() {
        return this.input.label;
    }

    getPlaceholder() {
        return 'Selecione';
    }
}