import { Injectable } from '@angular/core';
import { AppConfig } from 'src/environments/app-config';
import { LogLevel } from 'src/environments/log-level';

// Está como Injectable caso futuramente utilizemos algum serviço para logar fora do client;
@Injectable()
export class LogHandler {

    constructor() { }

    error(obj) {
        if (AppConfig.logLevel >= LogLevel.ERROR) {
            console.error(obj);
        }
    }

    info(obj) {
        if (AppConfig.logLevel >= LogLevel.INFO) {
            console.info(obj);
        }
    }

    debug(obj) {
        if (AppConfig.logLevel >= LogLevel.DEBUG) {
            console.debug(obj);
        }
    }

}