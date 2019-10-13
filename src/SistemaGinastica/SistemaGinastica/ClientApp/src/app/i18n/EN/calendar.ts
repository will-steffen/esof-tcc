import { EnumLocale } from "./enum";
import { WeekDay } from "../../enums/week-day";
import { Month } from "../../enums/month";
import { CalendarLocaleType } from "../locale-type";

export const CalendarLocale: CalendarLocaleType = {
    firstDayOfWeek: WeekDay.SUNDAY,
    dayNames: [
        EnumLocale.WeekDay[WeekDay.SUNDAY], 
        EnumLocale.WeekDay[WeekDay.MONDAY], 
        EnumLocale.WeekDay[WeekDay.TUESDAY], 
        EnumLocale.WeekDay[WeekDay.WEDNESDAY], 
        EnumLocale.WeekDay[WeekDay.THURSDAY], 
        EnumLocale.WeekDay[WeekDay.FRIDAY], 
        EnumLocale.WeekDay[WeekDay.SATURDAY]
    ],
    dayNamesShort: [
        EnumLocale.WeekDay[WeekDay.SUNDAY].substring(0, 3), 
        EnumLocale.WeekDay[WeekDay.MONDAY].substring(0, 3),
        EnumLocale.WeekDay[WeekDay.TUESDAY].substring(0, 3),
        EnumLocale.WeekDay[WeekDay.WEDNESDAY].substring(0, 3),
        EnumLocale.WeekDay[WeekDay.THURSDAY].substring(0, 3),
        EnumLocale.WeekDay[WeekDay.FRIDAY].substring(0, 3),
        EnumLocale.WeekDay[WeekDay.SATURDAY].substring(0, 3),
    ],
    dayNamesMin: [
        EnumLocale.WeekDay[WeekDay.SUNDAY].substring(0, 1), 
        EnumLocale.WeekDay[WeekDay.MONDAY].substring(0, 1),
        EnumLocale.WeekDay[WeekDay.TUESDAY].substring(0, 1),
        EnumLocale.WeekDay[WeekDay.WEDNESDAY].substring(0, 1),
        EnumLocale.WeekDay[WeekDay.THURSDAY].substring(0, 1),
        EnumLocale.WeekDay[WeekDay.FRIDAY].substring(0, 1),
        EnumLocale.WeekDay[WeekDay.SATURDAY].substring(0, 1),
    ],
    monthNames: [ 
        EnumLocale.Month[Month.JANUARY],
        EnumLocale.Month[Month.FEBRUARY],
        EnumLocale.Month[Month.MARCH],
        EnumLocale.Month[Month.APRIL],
        EnumLocale.Month[Month.MAY],
        EnumLocale.Month[Month.JUNE],
        EnumLocale.Month[Month.JULY],
        EnumLocale.Month[Month.AUGUST],
        EnumLocale.Month[Month.SEPTEMBER],
        EnumLocale.Month[Month.OCTOBER],
        EnumLocale.Month[Month.NOVEMBER],
        EnumLocale.Month[Month.DECEMBER],
    ],        
    monthNamesShort: [ 
        EnumLocale.Month[Month.JANUARY].substring(0, 3),
        EnumLocale.Month[Month.FEBRUARY].substring(0, 3),
        EnumLocale.Month[Month.MARCH].substring(0, 3),
        EnumLocale.Month[Month.APRIL].substring(0, 3),
        EnumLocale.Month[Month.MAY].substring(0, 3),
        EnumLocale.Month[Month.JUNE].substring(0, 3),
        EnumLocale.Month[Month.JULY].substring(0, 3),
        EnumLocale.Month[Month.AUGUST].substring(0, 3),
        EnumLocale.Month[Month.SEPTEMBER].substring(0, 3),
        EnumLocale.Month[Month.OCTOBER].substring(0, 3),
        EnumLocale.Month[Month.NOVEMBER].substring(0, 3),
        EnumLocale.Month[Month.DECEMBER].substring(0, 3),    
    ],
    today: 'Today',
    clear: 'Clean',
    dateFormat: 'mm/dd/yy',
    dateMonthFormat: 'mm/yy'
}