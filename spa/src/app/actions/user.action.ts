import { Action } from '@ngrx/store';
import {UserModel} from '../models/user.model';

export const FETCH_USERS = '[Users] Fetch Users';
export const FETCH_USERS_SUCCESS = '[Users] Fetch Users Success';
export const FETCH_USERS_FAILED = '[Users] Fetch Users Failed';
export const VIEW_USER_DETAIL = '[User] View User Detail';

export class FetchUsers implements Action {
  readonly type = FETCH_USERS;
  constructor() {}
}

export class FetchUsersSuccess implements Action {
  readonly type = FETCH_USERS_SUCCESS;
  constructor(public payload: UserModel[]) {}
}

export class FetchUsersFailed implements Action {
  readonly type = FETCH_USERS_FAILED;
  constructor() {}
}

export class ViewUserDetail implements Action {
  readonly type = VIEW_USER_DETAIL;
  constructor(public payload: UserModel) {}
}

export type UserAction = FetchUsers | FetchUsersSuccess | FetchUsersFailed | ViewUserDetail;
