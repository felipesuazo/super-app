import { Action } from '@ngrx/store';
import {UserModel} from '../models/user.model';

export const FETCH_USERS = '[Users] Fetch Users';
export const FETCH_USERS_SUCCESS = '[Users] Fetch Users Success';
export const FETCH_USERS_FAILED = '[Users] Fetch Users Failed';
export const SAVE_USER = '[Users] Save User';
export const SAVE_USER_SUCCESS = '[User] Save User Success';
export const SAVE_USER_FAILED = '[User] Save User Failed';
export const VIEW_USER_DETAIL = '[User] View User Detail';
export const FILTER_BY_NAME = '[User] Filter By Name';

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

export class SaveUser implements Action {
  readonly type = SAVE_USER;
  constructor(public payload: UserModel) {}
}

export class SaveUserSuccess implements Action {
  readonly type = SAVE_USER_SUCCESS;
  constructor(public payload: UserModel) {}
}

export class ViewUserDetail implements Action {
  readonly type = VIEW_USER_DETAIL;
  constructor(public payload: UserModel) {}
}

export class FilterByName implements Action {
  readonly type = FILTER_BY_NAME;
  constructor(public payload: string) {}
}

export type UserAction = FetchUsers | FetchUsersSuccess | FetchUsersFailed | SaveUser | SaveUserSuccess | ViewUserDetail | FilterByName;
