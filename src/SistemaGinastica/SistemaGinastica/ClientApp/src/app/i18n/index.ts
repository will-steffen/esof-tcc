import { Injectable } from "@angular/core";
import { LocaleType } from "./locale-type";
import { Locale as Locale_PTBR } from './PTBR';
// import { Locale as Locale_EN } from './EN';
// import { Locale as Locale_ES } from './ES';
import { Language } from "../enums/language";
import { StorageHandler } from "../handlers/storage.handler";
import { StorageTable } from "../enums/storage-table";


@Injectable()
export class I18n {
    static current: I18n;  

    t: LocaleType;
    options = [Locale_PTBR/*, Locale_EN, Locale_ES*/];

    constructor() {
        let locs = StorageHandler.List(StorageTable.i18n);
        let code = this.getBrowserCode();
        if (locs.length > 0) {
            code = locs[0].code;
        }
        this.t = this.options.filter(o => { return o.code == code })[0];
    }

    changeLanguage(code: Language) {
        let reload = code != this.t.code;    
        let selected = this.options.First(o => { return o.code == code });
        if (selected) {
            this.t = selected;
            StorageHandler.DeleteTable(StorageTable.i18n);
            StorageHandler.Save(StorageTable.i18n, { code: code });
            if(reload) window.location.reload();
        }        
    }

    getBrowserCode() {
        return Locale_PTBR.code;
        // return  window.navigator.language == 'en' ? Locale_EN.code :
        //         window.navigator.language == 'es' ? Locale_ES.code :
        //         Locale_PTBR.code;
    }

    extend(moduleName: string, locale: any, code?: Language) {
        let selected = this.options.First(o => { return o.code == code });
        selected[moduleName] = locale;
    }

}