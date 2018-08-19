import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {UserModel} from '../models/user.model';
import {AttributeModel} from '../models/attribute.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(http: HttpClientModule) { }

  fetchUsers(): Observable<UserModel> {
    this.http.get<UserModel>(`${environment.api}/users`);
  }

  fetchAttributes(name: string): Observable<AttributeModel[]> {
    this.http.get<AttributeModel[]>(`${environment.api}/attributes/${name}`);
  }

  postUser(user: UserModel): Observable<UserModel> {
    this.http.post<UserModel>(`${environment.api}/users`, user);
  }
}
