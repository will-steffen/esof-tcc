import { StorageTable } from "../enums/storage-table";

export class StorageHandler {

  static List(table: StorageTable): any[] {
    let data = localStorage.getItem(table);
    let result = data ? JSON.parse(data) : [];
    return result;
  }

  static Save(table: StorageTable, item: any): string {
    let data = this.List(table);
    if (item.storageId === undefined) item.storageId = this.Guid();
    data = data.filter(i => { return i.storageId != item.storageId });
    data.push(item);
    this.Persist(table, data);
    return item.storageId;
  }

  static SaveList(table: StorageTable, items: any[]): void {
    let data = this.List(table);
    let ids = [];
    items.forEach(i => {
      if (i.storageId === undefined) i.storageId = this.Guid();
      ids.push(i.storageId);
    });
    data = data.filter(i => { return !ids.Contains(i.storageId) });
    data = data.concat(items);
    this.Persist(table, data);
  }

  static GetByStorageId(table: StorageTable, storageId: string): any {
    let data = this.List(table);
    let resultFilter = data.filter(item => { return item.storageId == storageId });
    let result = resultFilter.length > 0 ? resultFilter[0] : null;
    return result;
  }

  static GetByProp(table: StorageTable, prop: string, value: string): any[] {
    let data = this.List(table);
    let resultFilter = data.filter(item => { return item[prop] == value });
    return resultFilter;
  }

  static DeleteTable(table: StorageTable): void {
    localStorage.removeItem(table);
  }

  static DeleteByStorageId(table: StorageTable, storageId: string): void {
    let data = this.List(table);
    data.RemoveFirstByProp('storageId', storageId);
    this.Persist(table, data);
  }

  static Delete(table: StorageTable, item: any): void {
    this.DeleteByStorageId(table, item.storageId);
  }

  private static Persist(table: StorageTable, items: any[]): void {
    localStorage.setItem(table, JSON.stringify(items));
  }

  static Guid(): string {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

}
