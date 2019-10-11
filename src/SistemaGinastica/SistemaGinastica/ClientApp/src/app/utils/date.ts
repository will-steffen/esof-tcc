window['daysToAdd'] = 0;

interface DateConstructor {
    Now(): Date;
    DaysBetween(date1: Date, date2: Date): number;     
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



interface Date {
    ToOnlyTimeString() : string;
    AddDays(n: number) : Date;
    Clone(): Date;
}

Date.prototype.ToOnlyTimeString = function (): string {
    const date = this as Date;
    return date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0');
}

Date.prototype.AddDays = function(n: number) {
    this.setDate(this.getDate() + n);
    return this;
}

Date.prototype.Clone = function() {    
    return new Date(this.getTime());
}