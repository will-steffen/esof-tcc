import { OnInit } from "@angular/core";
import { BasePage } from "./base-page";
import { BaseEntity } from "../models/base-entity";
import { BaseForm } from "../models/forms/base/base-form";
import { Table } from "../models/table/table";
import { BasePageDeps } from "./base-page-deps";
import { Filter } from "../models/filter/filter";

export class BaseFilterPage<TModel extends BaseEntity, TForm extends BaseForm<TModel>> 
extends BasePage implements OnInit {

    filter = new Filter<TModel>();
    table = new Table<TModel>();
    form: TForm;
    showDetail = false;

    permission = false;

    constructor(
        deps: BasePageDeps,
        private TModel: any, 
        private TForm: any,
        public filterRoute: string,
        public defaultRoute: string
    ){
        super(deps);
        this.filter.configure(filterRoute, TModel, deps);
        this.form = new this.TForm();
    }

    ngOnInit() {
        this.block.start();
        this.loadScreenDeps()
            .then(() => {
                this.filter.fields = [];
                this.createFilter();
                this.table.actionList = [];
                this.table.columnList = [];
                this.createTable();
                this.filter.search().then(() => this.afterFirstSearch());
            })
            .catch(err => {})
            .then(() => this.block.stop());
    }

    createFilter() { }
    createTable() { }
    afterFirstSearch() { }

    loadScreenDeps() : Promise<void> {
        return new Promise(r => r());
    }

    getModel(): TModel {
        return new this.TModel();
    }

    edit(model: TModel) { 
        this.form.Model(model);
        this.showDetail = true;
    }

    save() {        
        this.form.ShowValidation(true);
        if(this.form.isValid()){
            this.block.start();
            let request = this.form.model && this.form.model.id ? 'Put' : 'Post';
            this.service[request](this.defaultRoute, this.form.getDTO())
                .then(() => {
                    this.filter.search().then(() => this.closeDetails()); 
                    this.alert.success(this.i18n.t.label.saveSuccess);                  
                })
                .catch(err => {
                    this.alert.error(this.i18n.t.label.saveError);   
                })
                .then(() => this.block.stop());
        }
    }

    delete(model: TModel) {

    }

    closeDetails() {
        this.showDetail = false
    }
}