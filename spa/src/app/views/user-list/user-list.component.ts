import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {filteredUsers, hasFailed, isLoading} from '../../selectors/user.selector';
import {FetchUsers, FilterByName} from '../../actions/user.action';
import {Observable} from 'rxjs';
import {UserModel} from '../../models/user.model';
import {UserState} from '../../reducers/user.reducer';

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

  constructor(private store: Store<UserState>) { }

  ngOnInit() {
    this.users = this.store.pipe(select(filteredUsers));
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

  get drawerWidth() {
    return window.innerWidth * 0.6;
  }

  filterByName(filter: string) {
    this.store.dispatch(new FilterByName(filter));
  }
}
