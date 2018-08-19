import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {UserModel} from '../models/user.model';
import {AttributeModel} from '../models/attribute.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  fetchUsers(): Observable<UserModel> {
    return this.http.get<UserModel>(`${environment.api}/users`);
  }

  fetchAttributes(name: string): Observable<AttributeModel[]> {
    return this.http.get<AttributeModel[]>(`${environment.api}/attributes/${name}`);
  }

  postUser(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(`${environment.api}/users`, user);
  }
}
