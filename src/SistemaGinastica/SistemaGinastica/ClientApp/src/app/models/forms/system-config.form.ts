import { SystemConfigRequestDTO } from "src/app/dto/system-config-request.dto";
import { BaseForm } from "./base/base-form";
import { FormInput } from "./base/form-input";
import { FormInputType } from "./base/form-input-type";

export class SystemConfigForm extends BaseForm<SystemConfigRequestDTO> {

    systemDate: FormInput<Date>;

    configure() {
        this.systemDate = this.Input<Date>(this.i18n.t.system.systemDate, new Date())
            .Type(FormInputType.DATE)
            .Required();
    }

    getDTO(): SystemConfigRequestDTO {
        let dto = new SystemConfigRequestDTO();
        dto.systemDate = this.systemDate.value;
        return dto;
    }

}