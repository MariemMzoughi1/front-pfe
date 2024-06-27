import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet-pfe';
}
@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {

  private baseUrl = 'http://localhost:8080/api'; // URL de votre API Spring Boot

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { username: username, password: password };
    return this.http.post(`${this.baseUrl}/login`, body, { headers: headers });
  }

  // Ajoutez d'autres méthodes pour appeler d'autres fonctionnalités de votre API
}
export class LoginComponent {

  constructor(private UtilisateursService: UtilisateursService) { }

  login(username: string, password: string): void {
    this.UtilisateursService.login(username, password)
      .subscribe(response => {
        // Gérer la réponse du serveur
      }, error => {
        // Gérer les erreurs
      });
  }
}

