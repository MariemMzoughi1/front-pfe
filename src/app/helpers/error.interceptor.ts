import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';
import { AuthService } from '../services/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private tokenStorage: TokenStorageService,private router:Router,private authService: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request).pipe(
          tap({
              next: () => null,
              error: (err: HttpErrorResponse) => {
                  if ([401, 403].includes(err.status) )
                    this.tokenStorage.signOut()
                  this.router.navigate(['login']);
                  //window.location.href='http://localhost:8085/'; // auto logout if 401 or 403 response returned from api

                  const error = err.error?.message || err.status;
                  console.log('error '+error)
                  return throwError(error);
              },
          })
      );
  }
}
