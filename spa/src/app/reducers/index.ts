import * as fromUser from './user.reducer';
import {UserState} from './user.reducer';
import * as fromAttribute from './attribute.reducer';
import {AttributeState} from './attribute.reducer';

export const reducers = {
  userState: fromUser.reducer,
  attributeState: fromAttribute.reducer
};

export interface AppState {
  userState: UserState;
  attributeState: AttributeState;
}
