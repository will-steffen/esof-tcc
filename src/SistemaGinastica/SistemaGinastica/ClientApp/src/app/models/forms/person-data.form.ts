import { BaseForm } from "./base/base-form";
import { PersonDataModel } from "../person-data-model";
import { FormInput } from "./base/form-input";

export class PersonDataModelForm extends BaseForm<PersonDataModel> {
    name: FormInput<string>;
    rg: FormInput<string>;
    cpf: FormInput<string>;

    configure() {
        this.name = this.Input(this.i18n.t.personData.name);
        this.rg = this.Input(this.i18n.t.personData.rg);
        this.cpf = this.Input(this.i18n.t.personData.cpf);

        if(this.model){
            this.name.SetValue(this.model.name);
            this.rg.SetValue(this.model.rg);
            this.cpf.SetValue(this.model.cpf);
        }
    }

    getDTO<TModel extends PersonDataModel>(baseModel: TModel) {
        baseModel.id = this.model ? this.model.id : null;
        baseModel.name = this.name.value;
        baseModel.rg = this.rg.value;
        baseModel.cpf = this.cpf.value;
        return baseModel;
    }
    
}