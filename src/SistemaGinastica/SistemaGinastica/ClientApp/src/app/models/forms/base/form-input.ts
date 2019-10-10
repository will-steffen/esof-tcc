import { StorageHandler } from "src/app/handlers/storage.handler";
import { I18n } from "src/app/i18n";
import { FormInputOptions } from "./form-input-options";
import { FormInputType } from "./form-input-type";

class FormInputValidation {
    constructor(
        public message: string,
        public validation: Function
    ) { }
}

export class FormInput<TValue> {
    guid: string = StorageHandler.Guid();
    value: TValue;
    type: FormInputType = FormInputType.TEXT;
    options: FormInputOptions[];

    firstOptionEmpty = false;
    required = false;
    disabled = false;
    showValidation = false;
    mask: string;

    validationList: FormInputValidation[] = [];

    requiredErrorMessage = I18n.current.t.label.requiredField;

    constructor(
        public label: string = '',
        public defaultValue: any = ''
    ) {
        this.reset();
    }

    Type(type: FormInputType) {
        this.type = type;
        if (type == FormInputType.CHECKBOX && !this.value) {
            this.value = !!this.defaultValue as any;
        }
        return this;
    }

    Label(label: string) {
        this.label = label;
        return this;
    }

    Options(options: FormInputOptions[], emptyFirst: boolean = false) {
        this.firstOptionEmpty = emptyFirst;
        this.options = options;        
        return this.Type(FormInputType.SELECT);
    }


    Required(required: boolean = true) {
        this.required = required;
        return this;
    }

    Disabled(disabled: boolean = true) {
        this.disabled = disabled;
        return this;
    }

    Validation(message: string, validation: (input: FormInput<TValue>) => boolean) {
        let v = new FormInputValidation(message, validation);
        this.validationList.push(v);
        return this;
    }

    ShowValidation(showValidation: boolean = true) {
        this.showValidation = showValidation;
        return this;
    }

    SetValue(value: any) {
        if(value === null) value = '';
        this.value = value;
    }

    Mask(mask: string) {
        this.mask = mask;        
        return this.Type(FormInputType.MASK);
    }




    reset() {
        this.value = this.defaultValue;
    }

    isRequiredValid(): boolean {
        if (this.required && !this.disabled) {
            if ((this.type === FormInputType.TEXT || this.type === FormInputType.TEXTAREA)) {
                return !String.IsNullOrEmpty(this.value as any);
            }
            return (this.value as any) !== '' && this.value !== null && this.value !== undefined;
        }
        return true;
    }

    getErrorMessage(): string {
        if (!this.isRequiredValid()) return this.requiredErrorMessage;
        for (let i = 0; i < this.validationList.length; i++) {
            if (!this.validationList[i].validation(this))
                return this.validationList[i].message;
        }
        return null;
    }
}
