import {UserModel} from '../models/user.model';
import {FETCH_USERS, FETCH_USERS_FAILED, FETCH_USERS_SUCCESS, UserAction, VIEW_USER_DETAIL} from '../actions/user.action';

export interface UserState {
  users: UserModel[];
  selectedUser: UserModel;
  loading: boolean;
  failed: boolean;
}

const initialState: UserState = {
  users: [],
  selectedUser: null,
  loading: true,
  failed: false
};

export function reducer(state = initialState, action: UserAction): UserState {
  switch (action.type) {
    case FETCH_USERS: {
      return { ...state, loading: true, failed: false };
    }

    case FETCH_USERS_SUCCESS: {
      return { ...state, users: action.payload, loading: false };
    }

    case FETCH_USERS_FAILED: {
      return { ...state, users: [], loading: false, failed: true };
    }

    case VIEW_USER_DETAIL: {
      return { ...state, selectedUser: action.payload };
    }
  }
}
