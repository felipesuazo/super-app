import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NzNotificationService} from 'ng-zorro-antd';
import {AppState} from './reducers';
import {Store, select } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;

  constructor(private router: Router) {}

  routeIsActive(route: string) {
    return this.router.url === route;
  }
}
