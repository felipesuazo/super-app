import {createSelector} from '@ngrx/store';
import {UserState} from '../reducers/user.reducer';

export const selectUsers = createSelector((state: UserState) => state.users);
export const isLoading = createSelector((state: UserState) => state.loading);
export const hasFailed = createSelector((state: UserState) => state.failed);
export const userDetail = createSelector((state: UserState) => state.selectedUser);

