import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Souscription } from '../models/souscription.request';

const API_URL = 'http://localhost:8080/souscriptions/';


@Injectable({
  providedIn: 'root'
})
export class SouscriptionsService {

  constructor(private http:HttpClient) { }

  getAll() {
    return this.http.get<Souscription[]>(API_URL);
  }

  get(code: string)  {
    return this.http.get<Souscription>(API_URL+"get/"+code);
  }

  create(data: any): Observable<any> {
    return this.http.post(API_URL + 'create', data);
  }

  update(code: string, data: any) {
    return this.http.put(API_URL+"update", data);
  }

  delete(code: string): Observable<any> {
    return this.http.delete(API_URL+code);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(API_URL);
  }

}
