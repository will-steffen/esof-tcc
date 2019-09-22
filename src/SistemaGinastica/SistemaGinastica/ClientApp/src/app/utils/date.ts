window['daysToAdd'] = 0;

interface DateConstructor {
    Now(): Date;
    DaysBetween(date1: Date, date2: Date): number;
    RemoveTime(date: Date): Date;
    Format(date: Date, formater: string): string;
    GetLastInstant(date: Date): Date;
    GetFirstInstant(date: Date): Date;
    MonthDiff(date1: Date, date2: Date): number;
    YearDiff(recentDate: Date, pastDate: Date): number;

}

Date.Now = (): Date => {
    let d = window['daysToAdd'];
    if (d == 0)
        return new Date();
    let days = 1000 * 60 * 60 * 24 * d;
    return new Date(Date.now() + days);
}

Date.DaysBetween = function (date1, date2): number {
    var one_day = 1000 * 60 * 60 * 24;
    var difference_ms = date2.getTime() - date1.getTime();
    return Math.round(difference_ms / one_day);
}


Date.RemoveTime = function (date: Date): Date {
    let year = date.getFullYear()
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return new Date(year + "-" + month + "-" + day);
}

Date.Format = function (date: Date, format: string): string {
    const separator = format.match(/[^a-zA-Z]/)[0];

    let formatSeparated = format.split(separator);

    return formatSeparated.reduce((accumulator, nextValue, index) => {
        const sepr = index === 0 ? '' : separator;
        if (nextValue[0] === 'd') {
            return accumulator + sepr + addZeros(nextValue.length, date.getDate());
        } else if (nextValue[0] === 'm') {
            return accumulator + sepr + addZeros(nextValue.length, date.getMonth() + 1);
        } else if (nextValue[0] === 'y') {
            return accumulator + sepr + date.getFullYear();
        }
    }, "");
}

Date.GetLastInstant = function (date: Date): Date {
    date.setHours(23, 59, 59, 999);
    return date;
}

Date.GetFirstInstant = function (date: Date): Date {
    date.setHours(0, 0, 0, 0);
    return date;
}

function addZeros(size: number, currentValue: number) {
    let zeros = '';
    for (let i = 0; i < size - currentValue.toString().length; i++) {
        zeros += '0';
    }
    return zeros + currentValue.toString();
}

Date.MonthDiff = function (date1: Date, date2: Date): number {
    let months = (date2.getFullYear() - date1.getFullYear()) * 12;
    months -= date1.getMonth() + 1;
    months += date2.getMonth();
    return months <= 0 ? 0 : months;
}

Date.YearDiff = function (recentDate: Date, pastDate: Date) {
    return new Date(recentDate.getTime() - pastDate.getTime()).getUTCFullYear() - 1970
}
