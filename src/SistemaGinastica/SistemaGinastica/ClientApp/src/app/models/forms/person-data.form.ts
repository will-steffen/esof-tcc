import { PersonDataModel } from "../person-data-model";
import { BaseForm } from "./base/base-form";
import { FormInput } from "./base/form-input";

export class PersonDataModelForm extends BaseForm<PersonDataModel> {
    name: FormInput<string>;
    rg: FormInput<string>;
    cpf: FormInput<string>;

    configure() {
        this.name = this.Input<string>(this.i18n.t.personData.name).Required();
        this.rg = this.Input<string>(this.i18n.t.personData.rg).Mask('99.999.999-9').Required();
        this.cpf = this.Input<string>(this.i18n.t.personData.cpf).Mask('999.999.999-99').Required();

        if (this.model) {
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