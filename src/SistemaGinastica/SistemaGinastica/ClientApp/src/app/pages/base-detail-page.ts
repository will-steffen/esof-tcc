import { OnInit } from "@angular/core";
import { PageType } from "../enums/page-type";
import { BaseEntity } from "../models/base-entity";
import { BaseForm } from "../models/forms/base/base-form";
import { BasePage } from "./base-page";
import { BasePageDeps } from "./base-page-deps";

export class BaseDetailPage<TModel extends BaseEntity, TForm extends BaseForm<TModel>>
    extends BasePage implements OnInit {

    form: TForm;
    permission: boolean;
    successMessage;
    deleteSuccess;
    errorMessageMap: any;

    constructor(
        deps: BasePageDeps,
        private TModel: any,
        private TForm: any,
        public defaultRoute: string
    ) {
        super(deps);
        this.type = PageType.DETAIL;
        if (!this.recoveredState) {
            this.form = new this.TForm();
            this.permission = false;
            this.successMessage = this.i18n.t.label.saveSuccess;
            this.deleteSuccess = this.i18n.t.label.deleteSuccess;
            this.errorMessageMap = {};
        }
    }

    ngOnInit() {
        if (this.recoveredState) return this.recoveredInit();
        this.block.start();
        this.loadScreenDeps()
            .then(() => { })
            .catch(err => { })
            .then(() => this.block.stop());
    }

    recoveredInit() {

    }

    loadScreenDeps(): Promise<void> {
        return new Promise(r => r());
    }

    save() {
        this.form.ShowValidation(true);
        if (this.form.isValid()) {
            this.block.start();
            let request = this.form.model && this.form.model.id ? 'Put' : 'Post';
            this.service[request](this.defaultRoute, this.form.getDTO())
                .then(() => {
                    this.afterSave();
                    this.alert.success(this.successMessage);
                })
                .catch(err => {
                    this.handleRequestError(err);
                })
                .then(() => this.block.stop());
        }
    }

    afterSave() {
        this.closeDetails();
    }

    protected handleRequestError(error) {
        let message = !this.errorMessageMap[error.status]
            ? this.i18n.t.label.saveError
            : !this.errorMessageMap[error.status][error.error]
                ? this.errorMessageMap[error.status]
                : this.errorMessageMap[error.status][error.error];
                
        return this.alert.error(message);
    }

    delete(model: TModel) {
        this.alert.confirm(this.i18n.t.label.confirmDelete, true)
            .then(() => {
                this.block.start();
                this.service.Delete(this.defaultRoute + '/' + model.id)
                    .then(() => {
                        this.afterSave();
                        this.alert.success(this.deleteSuccess);
                    })
                    .catch(err => {
                        this.handleRequestError(err);
                    })
                    .then(() => this.block.stop());
            })
            .catch(() => { })
    }

    closeDetails() {
        window.history.back();
    }
}