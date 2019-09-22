import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationService } from 'primeng/api';

@Injectable()
export class AlertHandler {
    private positionClass = 'toast-bottom-right'
    constructor(
        private toastr: ToastrService,
        private confirmationService: ConfirmationService
    ) { }

    show(str: string) {
        this.toastr.info(str, null, { progressBar: true, positionClass: this.positionClass });
    }

    error(str: string) {
        this.toastr.error(str, null, { progressBar: true, positionClass: this.positionClass });
    }

    success(str: string) {
        this.toastr.success(str, null, { progressBar: true, positionClass: this.positionClass });
    }

    confirm(message: string, isDelete = false): Promise<void> {
        let icon = isDelete ? 'pi pi-trash' : null;
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