import { Injectable } from "@angular/core";
import { ApiRoute } from "../enums/api-route";
import { ServiceHandler } from "../handlers/service.handler";
import { Customer } from "../models/customer";
import { Payment } from "../models/payment";

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

    registerPayment(paymentData: Payment): Promise<Customer> {
        return new Promise((resolve, reject) => {
            this.service.Post(ApiRoute.customer.payment, paymentData).then(data => {
                resolve(Customer.fromData(data));
            }).catch(err => {
                reject(err);
            });
        });
    }
} 