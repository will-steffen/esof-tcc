import { Injectable } from "@angular/core";
import { Locale as Locale_EN } from './EN';
import { Language } from "../enums/language";
import { StorageTable } from "../enums/storage-table";
import { StorageHandler } from "../handlers/storage.handler";
import { LocaleType } from "./locale-type";
import { Locale as Locale_PTBR } from './PTBR';


@Injectable()
export class I18n {
    static current: I18n;

    t: LocaleType;
    options = [Locale_PTBR, Locale_EN];

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
            if (reload) window.location.reload();
        }
    }

    getBrowserCode() {
        return  window.navigator.language.Contains('pt') ? Locale_PTBR.code :
                Locale_EN.code;
    }

    extend(moduleName: string, locale: any, code?: Language) {
        let selected = this.options.First(o => { return o.code == code });
        selected[moduleName] = locale;
    }

}