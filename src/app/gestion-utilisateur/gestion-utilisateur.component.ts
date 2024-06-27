import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisateursService } from '../app.component';
import { User } from '../models/user.request';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-gestion-utilisateur',
  templateUrl: './gestion-utilisateur.component.html',
  styleUrls: ['./gestion-utilisateur.component.css']
})
export class GestionUtilisateurComponent implements OnInit{
  userList!:User[]
  UserItem!:User
   constructor(private router:Router, private userService:UserService) {

   }

  ngOnInit(): void {
    this.userService.getAll().subscribe({
      next:(data)=>{
        this.userList=data
        console.log(this.userList)
      },
      error:(err)=>console.log(err)
     })
  }

  goToAddUser(){
    this.router.navigateByUrl('/ajout-utilisateur')
  }


  consultUser(item: any) {
    this.userService.get(item.id).subscribe({
      next:(data)=>{
        this.UserItem=data
        console.log(data)
      
      }
  })
}

modifUser(id:string) {
  this.router.navigateByUrl('/modif-utilisateur/'+id);
}


deleteUser (item:any) {
  this.userService.delete(item.id).subscribe({
    next:(data)=> {
      console.log(data)
      window.location.reload()

    }
  })
}
}
