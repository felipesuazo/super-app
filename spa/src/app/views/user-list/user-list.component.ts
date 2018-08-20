import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {filter, filteredUsers, hasFailed, isLoading, order} from '../../selectors/user.selector';
import {FetchUsers, FilterByName, SortBy, ViewUserDetail} from '../../actions/user.action';
import {Observable} from 'rxjs';
import {UserModel} from '../../models/user.model';
import {UserState} from '../../reducers/user.reducer';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Observable<UserModel[]>;
  loading: Observable<boolean>;
  failed: Observable<boolean>;
  filter: Observable<string>;
  order: Observable<any>;

  mouseOver = false;
  formVisible = false;

  constructor(private store: Store<UserState>,
              private router: Router) { }

  ngOnInit() {
    this.users = this.store.pipe(select(filteredUsers));
    this.loading = this.store.pipe(select(isLoading));
    this.failed = this.store.pipe(select(hasFailed));
    this.filter = this.store.pipe(select(filter));
    this.order = this.store.pipe(select(order));

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

  sort(event) {
    let order = null;

    if (event.value === 'descend') {
      order = 'desc';
    } else if (event.value === 'ascend') {
      order = 'asc';
    }

    this.store.dispatch(new SortBy({ name: event.key, direction: order }));
  }

  viewDetails(user: UserModel) {
    this.store.dispatch(new ViewUserDetail(user));
    this.router.navigate(['/view']);
  }
}
