
import { StorageHandler } from "../handlers/storage.handler";
import { TableColumn } from "./table-column";
import { TableColumnAction } from "./table-column-action";

export class Table<T> {
    guid = StorageHandler.Guid();
    data: Array<T> = [];
    columnList: TableColumn<T>[] = [];
    actionList: TableColumnAction<T>[] = [];

    Action(icon, action: (item: T) => void, isVisible: (item: T) => boolean = (x) => true) {              
        this.actionList.push(new TableColumnAction<T>(icon, action, isVisible));
        return this;
    }

    Column() : TableColumn<T> {
        let column = new TableColumn<T>();
        this.columnList.push(column);
        return column;
    }
}