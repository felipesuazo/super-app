import {createFeatureSelector, createSelector} from '@ngrx/store';
import {UserState} from '../reducers/user.reducer';
import * as _ from 'lodash';

export const getUserState = createFeatureSelector('userState');
export const filter = createSelector(getUserState, (state: UserState) => state.filter);
export const order = createSelector(getUserState, (state: UserState) => state.order);
export const selectUsers = createSelector(getUserState, (state: UserState) => state.users);
export const isLoading = createSelector(getUserState, (state: UserState) => state.loading);
export const hasFailed = createSelector(getUserState, (state: UserState) => state.failed);
export const userDetail = createSelector(getUserState, (state: UserState) => state.selectedUser);

export const filteredUsers = createSelector(
  selectUsers,
  order,
  filter,
  (users, sort, name) => {
    const returnUsers = users.filter(it => it.name.toLowerCase().indexOf(name.toLowerCase()) > -1);

    const sortFields = [];
    const sortValues = [];

    if (sort.name) {
      sortFields.push('name');
      sortValues.push(sort.name);
    }

    if (sort.family) {
      sortFields.push('family');
      sortValues.push(sort.family);
    }

    return _.orderBy(returnUsers, sortFields, sortValues);
  }
);
