import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  role=null
  username=""
  constructor(private tokenStorageService: TokenStorageService , private router:Router) {
    
  }
ngOnInit(): void {
 this.router.events.subscribe((event)=>{
  this.tokenStorageService.getUsersAsObservable().subscribe((user:any)=>{
this.role=user.role
this.username=user.username
  })
 }) 
}
onLogout(): void {
  this.tokenStorageService.signOut();
  this.router.navigateByUrl('/login');

}
}
