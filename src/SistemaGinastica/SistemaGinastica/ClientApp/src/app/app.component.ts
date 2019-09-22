import { Component } from '@angular/core';
import { Icon } from './enums/icon';
import { I18n } from './i18n';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    icon = Icon;
    constructor(public i18n: I18n) {
        I18n.current = i18n;
    }
}
