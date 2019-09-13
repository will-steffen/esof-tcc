import { BaseEntity } from "./base-entity";

export class PersonDataModel extends BaseEntity {
    name: string;
    rg: string;
    cpf: string;
}