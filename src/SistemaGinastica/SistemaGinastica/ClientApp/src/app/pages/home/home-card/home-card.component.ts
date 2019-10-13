import { Component, Input } from "@angular/core";
import { Icon } from "src/app/enums/icon";

@Component({
    selector: 'app-home-card',
    templateUrl: './home-card.component.html',
    styleUrls: ['./home-card.component.less']
})
export class HomeCardComponent {
    @Input() data: HomeCardData;
    Icon = Icon;
}

export class HomeCardData {
    constructor(
        public title: string,
        public info: string | number,
        public icon: any,
        public tooltip: string
    ){}
}