
export class TableColumn<T> {
    label: string = '';
    orderBy: string;
    width: string;
    priority: number;

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

}
