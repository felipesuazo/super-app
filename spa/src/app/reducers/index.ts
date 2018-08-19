import * as fromUser from './user.reducer';
import {UserState} from './user.reducer';

export const reducers = {
  users: fromUser.reducer
};

export interface AppState {
  user: UserState;
}
