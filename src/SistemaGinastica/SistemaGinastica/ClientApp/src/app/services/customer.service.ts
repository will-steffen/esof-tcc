import { Injectable } from "@angular/core";
import { ApiRoute } from "../enums/api-route";
import { ServiceHandler } from "../handlers/service.handler";
import { Customer } from "../models/customer";

@Injectable()
export class CustomerService {
    constructor(private service: ServiceHandler) { }

    getById(id: number): Promise<Customer> {
        return new Promise((resolve, reject) => {
            this.service.Get(ApiRoute.customer.default + '/' + id).then(data => {
                resolve(Customer.fromData(data));
            }).catch(err => {
                reject(err);
            });
        });
    }
} 