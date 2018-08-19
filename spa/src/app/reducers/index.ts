import * as fromUser from './user.reducer';
import {UserState} from './user.reducer';
import { createSelector } from '@ngrx/store';

export const reducers = {
  userState: fromUser.reducer
};

export interface AppState {
  userState: UserState;
}

export const selectUsers = createSelector((state: AppState) => state.userState.users);
export const isLoading = createSelector((state: AppState) => state.userState.loading);
export const hasFailed = createSelector((state: AppState) => state.userState.failed);
export const userDetail = createSelector((state: AppState) => state.userState.selectedUser);

