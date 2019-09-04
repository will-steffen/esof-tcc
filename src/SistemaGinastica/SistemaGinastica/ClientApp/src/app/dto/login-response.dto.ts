import { BaseModel } from "../models/base-model";

export class LoginResponseDTO extends BaseModel {
    token: string;
}