import {UserModel} from '../models/user.model';
import {
  FETCH_USERS,
  FETCH_USERS_FAILED,
  FETCH_USERS_SUCCESS, FILTER_BY_NAME,
  SAVE_USER_SUCCESS, SORT_BY,
  UserAction,
  VIEW_USER_DETAIL
} from '../actions/user.action';

export interface UserState {
  users: UserModel[];
  selectedUser: UserModel;
  loading: boolean;
  failed: boolean;
  filter: string;
  order: {
    name: string;
    family: string;
  };
}

const initialState: UserState = {
  users: [],
  selectedUser: null,
  loading: true,
  failed: false,
  filter: '',
  order: {
    name: null,
    family: null
  }
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

    case SAVE_USER_SUCCESS: {
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    }

    case VIEW_USER_DETAIL: {
      return { ...state, selectedUser: action.payload };
    }

    case FILTER_BY_NAME: {
      return { ...state, filter: action.payload };
    }

    case SORT_BY: {
      return {
        ...state,
        order: {
          ...state.order,
          [action.payload.name]: action.payload.direction
        }
      };
    }

    default: {
      return state;
    }
  }
}
