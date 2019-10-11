import { UserType } from "src/app/enums/user-type";
import { PlanType } from "src/app/enums/plan-type";
import { WeekDay } from "src/app/enums/week-day";
import { Month } from "src/app/enums/month";


let userType = {};
userType[UserType.ADMIN] = 'Administrador';
userType[UserType.MANAGER] = 'Gerente';
userType[UserType.PHYSIOTHERAPIST] = 'Fisioterapeuta';
userType[UserType.RECEPCIONIST] = 'Recepcionista';

let planType = {};
planType[PlanType.ANNUALLY] = 'Anual';
planType[PlanType.MONTHLY] = 'Mensal';

let weekDay = {};
weekDay[WeekDay.SUNDAY] = 'Domingo';
weekDay[WeekDay.MONDAY] = 'Segunda';
weekDay[WeekDay.TUESDAY] = 'Terça';
weekDay[WeekDay.WEDNESDAY] = 'Quarta';
weekDay[WeekDay.THURSDAY] = 'Quinta';
weekDay[WeekDay.FRIDAY] = 'Sexta';
weekDay[WeekDay.SATURDAY] = 'Sábado';

let month = {};
month[Month.JANUARY] = 'Janeiro';
month[Month.FEBRUARY] = 'Fevereiro';
month[Month.MARCH] = 'Março';
month[Month.APRIL] = 'Abril';
month[Month.MAY] = 'Maio';
month[Month.JUNE] = 'Junho';
month[Month.JULY] = 'Julho';
month[Month.AUGUST] = 'Agosto';
month[Month.SEPTEMBER] = 'Setembro';
month[Month.OCTOBER] = 'Outubro';
month[Month.NOVEMBER] = 'Novembro';
month[Month.DECEMBER] = 'Dezembro';



export const EnumLocale = {
    UserType: userType,
    PlanType: planType,
    WeekDay: weekDay,
    Month: month
}
