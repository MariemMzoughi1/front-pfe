import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Systeme } from '../models/systeme.request';

const API_URL = 'http://localhost:8080/systemes/';


@Injectable({
  providedIn: 'root'
})
export class SystemeService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Systeme[]> {
    return this.http.get<Systeme[]>(API_URL);
  }

  get(code: string):Observable<Systeme>  {
    return this.http.get<Systeme>(API_URL+'get/'+code);
  }

  create(data: any): Observable<any> {
    return this.http.post(API_URL + 'create', data);
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
