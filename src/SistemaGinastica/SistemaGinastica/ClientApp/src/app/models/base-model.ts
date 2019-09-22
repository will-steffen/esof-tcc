import { StorageHandler } from "../handlers/storage.handler";

export class BaseModel {
    guid = StorageHandler.Guid();
    static fromData(data: any) {
        return Object.assign(new this(), data);
    }
}