
interface Array<T> {
    Contains(item): boolean;
    RemoveFirstByProp(prop, value): void;
    OrderBy(f: (obj: T) => boolean, asc: boolean): T[];
    OrderBy(f: (obj: T) => boolean): T[];
    Order(): T[];
    Order(asc): T[];
    Any(f: (obj: T) => boolean) : boolean;
    Any() : boolean;
    First(f: (obj: T) => boolean) : T;
    First() : T;
    Last(f: (obj: T) => boolean) : T; 
    Last() : T;   
    GroupBy(prop: string);
    Copy();
}
Array.prototype.Contains = function(item: any){
    return this.indexOf(item) > -1;
}
Array.prototype.RemoveFirstByProp = function(prop: string, value: any){
    let index;
    for(let i = 0; i < this.length; i++){
        if(this[i][prop] == value){
            index = i;
            break;
        }
    }
    if(index !== undefined){
        this.splice(index, 1);
    }
}

Array.prototype.OrderBy = function(f: (obj) => any, asc: boolean = true) {
    let arr: any[] = this;

    function getValue(item) {
        return f(item);
    }

    if(arr.length > 0 && typeof(getValue(arr[0])) == 'string'){
        arr = arr.sort((a, b) => {
            if(asc){
                return getValue(a).localeCompare(getValue(b));
            } else {
                return getValue(b).localeCompare(getValue(a));
            }
        })
    }else{
        if(asc){
            arr = arr.sort((a, b) =>  getValue(a) > getValue(b) ? 1 : -1);
        }else{
            arr = arr.sort((a, b) =>  getValue(a) > getValue(b) ? -1 : 1);
        }
    }
    
    return arr;
}

Array.prototype.Order = function(asc: boolean = true) {
    let arr: any[] = this;
    if(arr.length > 0 && typeof(arr[0]) == 'string'){
        if(asc){
            arr = arr.sort((a, b) =>  a.localeCompare(b));
        }else{
            arr = arr.sort((a, b) =>  b.localeCompare(a));
        }
    }else{
        if(asc){
            arr = arr.sort((a, b) =>  a > b ? 1 : -1);
        }else{
            arr = arr.sort((a, b) =>  a > b ? -1 : 1);
        }
    }    
    return arr;
}

Array.prototype.Any = function(f: Function = null) : boolean {
    if(f)
        return this.filter(f).length > 0;
    return this.length > 0;
}

Array.prototype.First = function(f: Function = null) {
    if(f){
        let filtered = this.filter(f);
        return filtered.length > 0 ? filtered[0] : null;
    }
    return this[0];
}

Array.prototype.Last = function(f: Function = null) {
    if(f){
        let filtered = this.filter(f);
        return filtered.length > 0 ? filtered[filtered.length - 1] : null;
    }
    return this[this.length - 1];
}

Array.prototype.GroupBy = function(prop: string) {
    let map = {};

    function getValue(item) {
        let value = {...item};
        prop.split('.').forEach(p => {
            value = value[p]
        });
        return value;
    }

    this.forEach(x => {
        if(!map[getValue(x)]){ map[getValue(x)] = []}
        map[getValue(x)].push(x);
    });
    return map;
}

Array.prototype.Copy = function() {
    return this.map(x => Object.assign({}, x));
}
