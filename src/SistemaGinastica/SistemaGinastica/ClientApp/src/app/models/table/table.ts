import { StorageHandler } from "src/app/handlers/storage.handler";
import { TableColumn } from "./table-column";
import { TableColumnAction } from "./table-column-action";


export class Table<T> {
    guid = StorageHandler.Guid();
    data: Array<T> = [];
    columnList: TableColumn<T>[] = [];
    actionList: TableColumnAction<T>[] = [];

    Action(icon, action: (item: T) => void) : TableColumnAction<T> {
        let actionIcon = new TableColumnAction<T>(icon, action);
        this.actionList.push(actionIcon);
        return actionIcon;
    }

    Column(): TableColumn<T> {
        let column = new TableColumn<T>();
        this.columnList.push(column);
        return column;
    }
}