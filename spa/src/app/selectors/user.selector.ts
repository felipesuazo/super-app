import {createSelector, createFeatureSelector} from '@ngrx/store';
import {UserState} from '../reducers/user.reducer';
import {AppState} from '../reducers';

export const getUserState = createFeatureSelector('userState');
export const filter = createSelector(getUserState, (state: UserState) => state.filter);
export const selectUsers = createSelector(getUserState, (state: UserState) => state.users);
export const isLoading = createSelector(getUserState, (state: UserState) => state.loading);
export const hasFailed = createSelector(getUserState, (state: UserState) => state.failed);
export const userDetail = createSelector(getUserState, (state: UserState) => state.selectedUser);

export const filteredUsers = createSelector(
  selectUsers,
  filter,
  (users, name) => users.filter(it => it.name.toLowerCase().indexOf(name.toLowerCase()) > -1)
);
