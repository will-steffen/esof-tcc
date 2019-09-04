import { BaseModel } from "./base-model";

export class BaseEntity extends BaseModel {
    id: number;  
    createDate: Date;
    updateDate: Date;

    static fromData(data: any) {
        const e = super.fromData(data);        
        if (e.createDate) e.createDate = new Date(e.createDate);
        if (e.updateDate) e.updateDate = new Date(e.updateDate);
        return e;
    }
}