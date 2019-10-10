
export class TableColumnAction<T> {
    constructor(
        public icon: any,
        public action: (item: T) => void        
    ) { }
    
    disabledIf: (item: T) => boolean
    tooltip: string;

    isDisabled(item: T) {
        if (this.disabledIf) {
            return this.disabledIf(item);
        }
        return false;
    }

    click(item: T) {
        if(!this.isDisabled(item)){
            this.action(item);
        }
    }

    DisabledIf(disabledIf: (item: T) => boolean) {
        this.disabledIf = disabledIf;
        return this;
    }

    Tooltip(tooltip: string) {
        this.tooltip = tooltip;
        return this;
    }
}