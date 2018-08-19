import {Injectable} from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import {ApiService} from '../services/api.service';
import {Observable} from 'rxjs';
import {FETCH_USERS, FETCH_USERS_SUCCESS, FetchUsers} from '../actions/user.action';
import {map, mergeMap} from 'rxjs/operators';

@Injectable()
export class UserEffect {
  constructor(private actions$: Actions,
              private api: ApiService) {}

  @Effect()
  fetchUsers$: Observable<Action> = this.actions$.pipe(
    ofType(FETCH_USERS),
    mergeMap(() =>
      this.api.fetchUsers().pipe(
        map(data => ({ type: FETCH_USERS_SUCCESS, payload: data}))
      )
    )
  );
}
