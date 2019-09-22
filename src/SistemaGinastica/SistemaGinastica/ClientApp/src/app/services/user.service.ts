import { Injectable } from "@angular/core";
import { ApiRoute } from "../enums/api-route";
import { StorageTable } from "../enums/storage-table";
import { ServiceHandler } from "../handlers/service.handler";
import { User } from "../models/user";
import { BaseStorageService } from "./base-storage.service";

@Injectable()
export class UserService extends BaseStorageService<User>{

    constructor(
        private service: ServiceHandler,
    ) { super(StorageTable.USER, User) }

    saveToken(token: string) {
        let user = new User();
        user.token = token;
        this.DeleteTable();
        this.Save(user);
    }

    getUser(): User {
        let l = this.List();
        if (l.length == 0) return null;
        return l[0];
    }

    logout() {
        this.DeleteTable();
    }

    updateUserFromServer(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.service.Get(ApiRoute.user.default).then(data => {
                let user = this.getUser();
                user = Object.assign(user, data);
                this.Save(user);
                resolve();
            }).catch(err => {
                reject(err);
            });
        });
    }
}