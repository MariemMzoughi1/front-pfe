import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  implements CanActivate{

  constructor(private tokenStorage: TokenStorageService,private authService:AuthService,private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (this.tokenStorage.isLogedIn()) {//&& this.tokenStorage.getToken() != undefined && this.tokenStorage.isAuthenticated()) {
        //console.log('isAuthenticated '+this.tokenStorage.isAuthenticated())
        return true;
      }
      else {
        this.tokenStorage.signOut();
        this.router.navigate(['login']);
        return false;
      }
  }
}
