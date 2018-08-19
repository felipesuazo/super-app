import {AttributeModel} from '../models/attribute.model';
import {AttributeAction, FETCH_ATTRIBUTES_SUCCESS} from '../actions/attribute.action';

export interface AttributeState {
  position: AttributeModel[];
  area: AttributeModel[];
  world: AttributeModel[];
}

const initalState: AttributeState = {
  position: [],
  area: [],
  world: []
};

export function reducer(state = initalState, action: AttributeAction): AttributeState {
  switch (action.type) {
    case FETCH_ATTRIBUTES_SUCCESS: {
      return {
        ...state,
        [action.payload.name]: action.payload.attributes
      };
    }
  }
}

