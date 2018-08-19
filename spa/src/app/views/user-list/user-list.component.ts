import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import {hasFailed, isLoading, selectUsers} from '../../reducers';
import {FetchUsers} from '../../actions/user.action';
import {Observable} from 'rxjs';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Observable<UserModel[]>;
  loading: Observable<boolean>;
  failed: Observable<boolean>;

  mouseOver = false;
  formVisible = false;

  constructor(private store: Store<fromRoot.AppState>) { }

  ngOnInit() {
    this.users = this.store.pipe(select(selectUsers));
    this.loading = this.store.pipe(select(isLoading));
    this.failed = this.store.pipe(select(hasFailed));

    this.loadUsers();
  }

  loadUsers() {
    this.store.dispatch(new FetchUsers());
  }

  openForm() {
    this.formVisible = true;
  }

  closeForm() {
    this.formVisible = false;
  }
}
