interface String {
    Contains(item: string): boolean;
    ReplaceAll(from: string, to: string): string;
    EqualsIgnoreCase(str: string): boolean;
    RemoveSpecialChars(str: string): string;
    ValidateAsEmail(): boolean;
}
String.prototype.Contains = function (item: string) {
    return this.indexOf(item) > -1;
}
String.prototype.ReplaceAll = function (from: string, to: string) {
    let str = this;
    while (str.contains(from)) {
        str = str.replace(from, to);
    }
    return str;
}
String.prototype.EqualsIgnoreCase = function (str: string): boolean {
    let t = this && this.toLowerCase ? this.toLowerCase() : this;
    let s = str && str.toLowerCase ? str.toLowerCase() : str;
    return t == s;
}

String.prototype.RemoveSpecialChars = function () {
    return this.replace(/[^a-zA-Z0-9 ]/g, '');
}

String.prototype.ValidateAsEmail = function () {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(this);
}

interface StringConstructor {
    IsNullOrEmpty: (str: string) => boolean;
}

String.IsNullOrEmpty = (str): boolean => {
    return str === '' || str === null || str == undefined || typeof str === 'string' && str.trim().length == 0;
}

