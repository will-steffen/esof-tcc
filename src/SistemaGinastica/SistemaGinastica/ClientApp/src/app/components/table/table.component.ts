import { Input, Component, AfterViewInit, ViewChild } from "@angular/core";
import { Paginator } from "primeng/paginator";
import { Table } from "src/app/models/table/table";
import { TableColumn } from "src/app/models/table/table-column";
import { Filter } from "src/app/models/filter/filter";

@Component({
    selector: 'lb-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.less']
  })
export class TableComponent<T> implements AfterViewInit {

    @Input() table: Table<T>;
    @Input() filter: Filter<T>;
    @ViewChild('paginator') paginator: Paginator;

    sort(event) {
        this.filter.sort(event);            
    }

    getPriorityClass(column: TableColumn<T>) {
        let cl = '';  
        if(column.priority && column.priority > 5){
            cl += ' ui-p-6';
        }else if(column.priority && column.priority > 0){
            cl += ' ui-p-' + column.priority;
        }        
        return cl;
    } 

    getActionsWidth() {
        return (this.table.actionList.length * 3) + 'em';
    }


    ngAfterViewInit() {
        if(this.filter){
            this.filter.AfterSearch(() => {
                this.table.data = this.filter.data;
            });
            this.filter.OnResetPage(() => {
                this.paginator.changePage(this.filter.page - 1);
            });
            setTimeout(() => {
                this.paginator.changePage(this.filter.page - 1);
            }, 10); 
        }
    }

    getCounterString() {
        let startCount = ((this.filter.page - 1) * this.filter.pageSize) + 1;
        let endCount = this.filter.page * this.filter.pageSize;
        endCount = endCount < this.filter.totalResults ? endCount : this.filter.totalResults
        return 'Exibindo resultados de {SC} a {EC}, de um total de {T}.'
            .replace('{T}', this.filter.totalResults.toString())
            .replace('{SC}', startCount.toString())
            .replace('{EC}', endCount.toString());
        // return this.i18n.t.core.label.filterResult
        //     .replace(I18nTags.Total, this.filter.totalResults.toString())
        //     .replace(I18nTags.StarCount, startCount.toString())
        //     .replace(I18nTags.EndCount, endCount.toString());
    }

    onChangePageSize() {
        if(this.filter) this.filter.onChangePageSize();
    }
}