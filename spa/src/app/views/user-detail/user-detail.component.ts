import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {UserModel} from '../../models/user.model';
import {UserState} from '../../reducers/user.reducer';
import { Store, select } from '@ngrx/store';
import {userDetail} from '../../selectors/user.selector';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: Observable<UserModel>;

  constructor(private store: Store<UserState>) { }

  ngOnInit() {
    this.user = this.store.pipe(select(userDetail));
  }

}
