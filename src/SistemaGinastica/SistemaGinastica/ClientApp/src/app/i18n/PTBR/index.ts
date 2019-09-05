import { Language } from "src/app/enums/language";
import { LocaleType } from "../locale-type";
import { EnumLocale } from "./enum";

export let Locale: LocaleType = {
    code: Language.PTBR,
    dateFormat: 'dd/mm/yyyy',
    enum: EnumLocale 
}