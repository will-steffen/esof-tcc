import { BaseModel } from "../models/base-model";

export class LoginRequestDTO extends BaseModel {
    constructor(
        public username: string,
        public password: string
    ){ super() }    
}