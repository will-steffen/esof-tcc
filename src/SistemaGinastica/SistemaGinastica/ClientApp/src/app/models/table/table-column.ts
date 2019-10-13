
export class TableColumn<T> {
    label: string = '';
    orderBy: string;
    width: string;
    priority: number;
    className: string = '';
    classNameCondition: (model: T) => boolean = () => true;

    getValue: (model: T) => string = () => null;

    Label(label: string) {
        this.label = label;
        return this;
    }

    OrderBy(orderBy: string) {
        this.orderBy = orderBy;
        return this;
    }

    Priority(priority: number) {
        this.priority = priority;
        return this;
    }

    Width(width: string) {
        this.width = width;
        return this;
    }

    Value(getValue: (model: T) => string) {
        this.getValue = getValue;
        return this;
    }

    StyleClass(className, condition: (model: T) => boolean = null) {
        this.className = className;
        if(condition) this.classNameCondition = condition;
        return this;
    }

}
