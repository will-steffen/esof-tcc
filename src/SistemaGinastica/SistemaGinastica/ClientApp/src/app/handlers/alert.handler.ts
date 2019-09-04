import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationService } from 'primeng/api';

@Injectable()
export class AlertHandler {

    constructor(
        private toastr: ToastrService,
        private confirmationService: ConfirmationService
    ) { }

    show(str: string) {
        this.toastr.info(str);
    }

    error(str: string) {
        this.toastr.error(str);
    }

    success(str: string) {
        this.toastr.success(str);
    } 

    confirm(message: string, isDelete = false) : Promise<void> {
        let icon = isDelete ? 'pi pi-trash' : 'pi';
        return new Promise((resolve, reject) => {
            this.confirmationService.confirm({
                message: message,
                accept: () => { resolve(); },
                reject: () => { reject(); },
                icon: icon
            });
        });
    }

}