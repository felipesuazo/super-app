import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {ApiService} from '../services/api.service';
import {Observable, of} from 'rxjs';
import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  SAVE_USER,
  SAVE_USER_FAILED,
  SAVE_USER_SUCCESS,
  SaveUser,
  SaveUserFailed, SaveUserSuccess
} from '../actions/user.action';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {NzNotificationService} from 'ng-zorro-antd';

@Injectable()
export class UserEffect {
  constructor(private actions$: Actions,
              private api: ApiService,
              private notification: NzNotificationService) {}

  @Effect()
  fetchUsers$: Observable<Action> = this.actions$.pipe(
    ofType(FETCH_USERS),
    mergeMap(() =>
      this.api.fetchUsers().pipe(
        map(data => ({ type: FETCH_USERS_SUCCESS, payload: data}))
      )
    )
  );

  @Effect()
  saveUser$: Observable<Action> = this.actions$.pipe(
    ofType(SAVE_USER),
    mergeMap((action: SaveUser) =>
      this.api.postUser(action.payload).pipe(
        map(data => ({ type: SAVE_USER_SUCCESS, payload: data })),
        catchError(() => of(new SaveUserFailed()))
      )
    )
  );

  @Effect({dispatch: false})
  saveUserFailed$ = this.actions$.pipe(
    ofType(SAVE_USER_FAILED),
    mergeMap(() => {
      this.createNotification('error', 'Error', 'Cannot add user');
      return of();
    })
  );

  @Effect({dispatch: false})
  saveUserSuccess$ = this.actions$.pipe(
    ofType(SAVE_USER_SUCCESS),
    mergeMap((action: SaveUserSuccess) => {
      this.createNotification('success', 'Success', `User ${action.payload.name} added succesfully`);
      return of();
    })
  );



  createNotification(type: string, title: string, message: string) {
    this.notification.create(type, title, message);
  }
}
