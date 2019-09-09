import { Component, Input } from "@angular/core";

@Component({
    selector: 'g-page-title',
    templateUrl: './page-title.component.html',
    styleUrls: ['./page-title.component.less']
})
export class PageTitleComponent {
    @Input() title: string;
}