import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NzNotificationService} from 'ng-zorro-antd';
import {AppState} from './reducers';
import {Store, select} from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isCollapsed = false;

  constructor(private router: Router,
              private notification: NzNotificationService,
              private store: Store<AppState>) {}

  ngOnInit() {
    this.store.pipe(select(state => state.userState.failed.save)).subscribe((failed) => {
      if (failed) {
        this.createNotification('error', 'Error', 'Cannot add user.');
      }
    });
  }

  routeIsActive(route: string) {
    return this.router.url === route;
  }

  createNotification(type: string, title: string, message: string) {
    this.notification.create(type, title, message);
  }
}
