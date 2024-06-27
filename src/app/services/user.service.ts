import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.request';

const API_URL = 'http://localhost:8080/user/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getAll():Observable<User[]>{
    return this.http.get<User[]>(API_URL);
  }

  get(code: string):Observable<User>  {
    return this.http.get<User>(API_URL+ "get/" + code);
  }

  create(data: any): Observable<any> {
    return this.http.post(API_URL+'create', data);
  }

  update(data: any) {
    return this.http.put(API_URL+'update', data);
  }

  delete(code: string): Observable<any> {
    return this.http.delete(API_URL+'delete/'+code);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(API_URL);
  }

  
}
