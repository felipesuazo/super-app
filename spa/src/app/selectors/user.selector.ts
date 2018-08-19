import {createSelector} from '@ngrx/store';
import {AppState} from '../reducers';

export const selectUsers = createSelector((state: AppState) => state.userState.users);
export const isLoading = createSelector((state: AppState) => state.userState.loading);
export const hasFailed = createSelector((state: AppState) => state.userState.failed);
export const userDetail = createSelector((state: AppState) => state.userState.selectedUser);

