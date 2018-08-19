import {Injectable} from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import {ApiService} from '../services/api.service';
import {Observable} from 'rxjs';
import {FETCH_ATTRIBUTES, FETCH_ATTRIBUTES_SUCCESS, FetchAttributes} from '../actions/attribute.action';
import {map, mergeMap} from 'rxjs/operators';

@Injectable()
export class AttributeEffect {
  constructor(private actions$: Actions,
              private api: ApiService) {}

  @Effect()
  fetchAttributes$: Observable<Action> = this.actions$.pipe(
    ofType(FETCH_ATTRIBUTES),
    mergeMap((action: FetchAttributes) =>
      this.api.fetchAttributes(action.payload).pipe(
        map(data => ({ type: FETCH_ATTRIBUTES_SUCCESS, payload: { name: action.payload, attributes: data }}))
      )
    )
  );
}
