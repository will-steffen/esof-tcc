import { UserType } from "src/app/enums/user-type";
import { PlanType } from "src/app/enums/plan-type";
import { WeekDay } from "src/app/enums/week-day";


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
weekDay[WeekDay.TUEDAY] = 'Terça';
weekDay[WeekDay.WEDNESDAY] = 'Quarta';
weekDay[WeekDay.THURSDAY] = 'Quinta';
weekDay[WeekDay.FRIDAY] = 'Sexta';
weekDay[WeekDay.SATURDAY] = 'Sábado';

export const EnumLocale = {
    UserType: userType,
    PlanType: planType,
    WeekDay: weekDay
}
