
import { BaseModel } from "../models/base-model";
import { Table } from "../enums/table";
import { StorageHandler } from "../handlers/storage.handler";


export class BaseStorageService<TModel extends BaseModel> {
    constructor(
        public table: Table,
        public baseModelType: any
    ) { }

    public List(): TModel[] {
        let models = StorageHandler.List(this.table);
        return models.map(x => this.baseModelType.fromData(x));
    }

    public Save(obj: TModel): string {
        return StorageHandler.Save(this.table, obj);
    }

    public SaveList(objs: TModel[]): void {
        return StorageHandler.SaveList(this.table, objs);
    }

    public GetByStorageId(storageId: string): TModel {
        let obj = StorageHandler.GetByStorageId(this.table, storageId);
        if(obj == null) return null;
        return this.baseModelType.fromData(obj);
    }

    public GetByProp(prop: string, value: string): TModel {
        let obj = StorageHandler.GetByProp(this.table, prop, value);
        if(obj == null) return null;
        return this.baseModelType.fromData(obj);
    }

    public Delete(obj: TModel): void {
        return StorageHandler.Delete(this.table, obj);
    }

    public DeleteTable(): void {
        return StorageHandler.DeleteTable(this.table);
    }

    public DeleteByStorageId(storageId: string): void {
        return StorageHandler.DeleteByStorageId(this.table, storageId);
    }
}