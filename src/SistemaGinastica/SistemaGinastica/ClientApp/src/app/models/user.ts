
import { UserType } from "../enums/user-type";
import { PersonDataModel } from "./person-data-model";

export class User extends PersonDataModel {
    username: string;
    type: UserType;
    token: string;
}