
export class TableColumnAction<T> {
    constructor(
        public icon: any,
        public action: (item: T) => void,
        public isVisible: (item: T) => boolean
    ){}

    Visible(item: T) {
        if(this.isVisible) {
            return this.isVisible(item);
        }
        return true;
    }
}