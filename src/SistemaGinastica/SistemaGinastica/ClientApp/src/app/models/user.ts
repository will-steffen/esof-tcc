
import { BaseEntity } from "./base-entity";
import { UserType } from "../enums/user-type";

export class User extends BaseEntity {
    name: string;
    username: string;
    email: string;
    token: string;
    type: UserType;
}