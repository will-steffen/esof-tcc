import { FormInput } from "./form-input";
import { BaseEntity } from "src/app/models/base-entity";
import { BaseModel } from "src/app/models/base-model";
import { I18n } from "src/app/i18n";


export class BaseForm<TModel extends BaseEntity> extends BaseModel {

    model: TModel;
    inputList: FormInput<any>[] = [];
    subFormList: BaseForm<BaseEntity>[] = [];
    i18n = I18n.current;

    Input<TValue>(label: string = '', defaultValue: any = '') : FormInput<TValue> {
        let input = new FormInput<TValue>(label, defaultValue);
        this.inputList.push(input);
        return input;
    }

    SubForm<TForm>(form: TForm): TForm {
        this.subFormList.push(form as any as BaseForm<BaseEntity>);
        return form;
    }

    ShowValidation(showValidation: boolean = true) {
        this.inputList.forEach(x => x.ShowValidation(showValidation));
        this.subFormList.forEach(x => x.ShowValidation(showValidation));
    }

    Model(model: TModel) {
        this.reset(model);
        this.configure(model);
    }

    configure(model: TModel) {

    }

    reset(model: TModel) {
        this.model = model;
        this.inputList = [];
        this.subFormList = [];
    }

    isValid() : boolean {
        return !this.getErrorMessage();
    }

    getErrorMessage() : string {        
        for(let i = 0; i < this.inputList.length; i++){
            let m = this.inputList[i].getErrorMessage();
            if(m) return m;
        }
        for(let i = 0; i < this.subFormList.length; i++){
            let m = this.subFormList[i].getErrorMessage();
            if(m) return m;
        }
    }

    getDTO() : BaseModel {
        return new BaseModel();
    }
    

}
