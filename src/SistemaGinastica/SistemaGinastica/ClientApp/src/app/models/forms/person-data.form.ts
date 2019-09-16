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

    getDTO<TModel extends PersonDataModel>(baseDto: TModel) {
        baseDto.id = this.model ? this.model.id : null;
        baseDto.name = this.name.value;
        baseDto.rg = this.rg.value;
        baseDto.cpf = this.cpf.value;
        return baseDto;
    }
    
}