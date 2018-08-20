import {createSelector} from '@ngrx/store';
import {AppState} from '../reducers';

export const selectAttributes = createSelector((state: AppState) => state.attributeState);
