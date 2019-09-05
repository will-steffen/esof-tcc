import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { StorageHandler } from './storage.handler';
import { StorageTable } from '../enums/storage-table';

@Injectable()
export class ServiceHandler {
    constructor( 
        public http: HttpClient,
        public router: Router
    ){ }

    Post(path: string, body: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.post(path, body, this.GetHeaders()).toPromise()
                .then(d => resolve(d))
                .catch(err => this.handleError(err, reject));
        });         
    }

    Get(path: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(path, this.GetHeaders()).toPromise()
                .then(d => resolve(d))
                .catch(err => this.handleError(err, reject));
        });
    }

    Delete(path: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.delete(path, this.GetHeaders()).toPromise()
                .then(d => resolve(d))
                .catch(err => this.handleError(err, reject));
        });
    }

    private GetHeaders() : any {
        let token = this.GetAuthToken();
        if(token){
            let h = new HttpHeaders();
            h = h.set("Authorization", 'Bearer ' + token);
            return { headers: h };
        }        
    }

    private GetAuthToken() {
        let userList: Array<User> = StorageHandler.List(StorageTable.USER)
        if(userList.length) return userList.First().token; 
    }

    private handleError(err, rejectFunction) {        
        rejectFunction(err);
    }
}