import { Injectable } from "@angular/core";
import { ApiRoute } from "../enums/api-route";
import { ServiceHandler } from "../handlers/service.handler";
import { Instructor } from "../models/instructor";

@Injectable()
export class InstructorService {
    constructor(private service: ServiceHandler) { }

    getGroupClassList(): Promise<Instructor[]> {
        return new Promise((resolve, reject) => {
            this.service.Get(ApiRoute.instructor.groupClass).then(data => {
                resolve(data.map(x => Instructor.fromData(x)));
            }).catch(err => {
                reject(err);
            });
        });
    }
} 