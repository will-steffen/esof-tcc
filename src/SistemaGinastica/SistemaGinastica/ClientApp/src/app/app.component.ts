import { Component } from '@angular/core';
import { Icon } from './enums/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  icon = Icon;
}
