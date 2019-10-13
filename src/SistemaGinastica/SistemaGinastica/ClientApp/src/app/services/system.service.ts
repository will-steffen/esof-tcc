import { Injectable } from "@angular/core";
import { ServiceHandler } from "../handlers/service.handler";
import { ApiRoute } from "../enums/api-route";
import { SystemConfigResponseDTO } from "../dto/system-config-response.dto";
import { SystemConfigRequestDTO } from "../dto/system-config-request.dto";

@Injectable()
export class SystemService {
    constructor(private service: ServiceHandler) { }

    getConfig() {
        this.service.Get(ApiRoute.system.default)
            .then((data: SystemConfigResponseDTO) => {
                window['daysToAdd'] = data.daysToAddOnNow;
            })
            .catch(() => { })
    }

    setConfig(data: SystemConfigRequestDTO) {
        return this.service.Post(ApiRoute.system.default, data);
    }
}