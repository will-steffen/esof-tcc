import { Component, Input } from "@angular/core";

@Component({
    selector: 'page-title',
    templateUrl: './page-title.component.html',
    styleUrls: ['./page-title.component.less']
})
export class PageTitleComponent {
    @Input() title: string;
}