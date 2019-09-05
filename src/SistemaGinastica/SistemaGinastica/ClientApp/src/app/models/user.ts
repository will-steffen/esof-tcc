
import { BaseEntity } from "./base-entity";

export class User extends BaseEntity {
    name: string;
    username: string;
    email: string;
    token: string;
}