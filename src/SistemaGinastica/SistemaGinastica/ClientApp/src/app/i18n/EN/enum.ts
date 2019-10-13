import { UserType } from "src/app/enums/user-type";
import { PlanType } from "src/app/enums/plan-type";
import { WeekDay } from "src/app/enums/week-day";
import { Month } from "src/app/enums/month";


let userType = {};
userType[UserType.ADMIN] = 'Administrator';
userType[UserType.MANAGER] = 'Managet';
userType[UserType.PHYSIOTHERAPIST] = 'Physioterapist';
userType[UserType.RECEPCIONIST] = 'Recepcionist';

let planType = {};
planType[PlanType.ANNUALLY] = 'Anually';
planType[PlanType.MONTHLY] = 'Monthly';

let weekDay = {};
weekDay[WeekDay.SUNDAY] = 'Sunday';
weekDay[WeekDay.MONDAY] = 'Monday';
weekDay[WeekDay.TUESDAY] = 'Tueday';
weekDay[WeekDay.WEDNESDAY] = 'Wednesday';
weekDay[WeekDay.THURSDAY] = 'Thursday';
weekDay[WeekDay.FRIDAY] = 'Friday';
weekDay[WeekDay.SATURDAY] = 'Saturday';

let month = {};
month[Month.JANUARY] = 'January';
month[Month.FEBRUARY] = 'February';
month[Month.MARCH] = 'March';
month[Month.APRIL] = 'April';
month[Month.MAY] = 'May';
month[Month.JUNE] = 'June';
month[Month.JULY] = 'July';
month[Month.AUGUST] = 'August';
month[Month.SEPTEMBER] = 'September';
month[Month.OCTOBER] = 'October';
month[Month.NOVEMBER] = 'November';
month[Month.DECEMBER] = 'December';



export const EnumLocale = {
    UserType: userType,
    PlanType: planType,
    WeekDay: weekDay,
    Month: month
}
