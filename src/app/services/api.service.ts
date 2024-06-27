import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from '../models/api.request';

const API_URL = 'http://localhost:8080/api/';


@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Api[]>{
    return this.http.get<Api[]>(API_URL);
  }

  get(code: string):Observable<Api>  {
    return this.http.get<Api>(API_URL+'get/'+code);
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
