import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';
import { Route, Router } from '@angular/router';
import { Role } from '../models/role.response';

@Component({
  selector: 'app-ajout-utilisateur',
  templateUrl: './ajout-utilisateur.component.html',
  styleUrls: ['./ajout-utilisateur.component.css']
})
export class AjoutUtilisateurComponent implements OnInit{
  selectedRole!: any ;
  userForm!: FormGroup
  roles: any[] = []; // Define your roles here
  constructor(private toastr: ToastrService, private fb:FormBuilder, private userService:UserService, private router:Router) {


  }

  ngOnInit(): void {
    this.toastr.success('Bienvenu :D');
    
    this.userForm=this.fb.group({
      username :this.fb.control(''),
      password :this.fb.control(''),
      matricule:this.fb.control(''),
      email :this.fb.control(''),
      telephone :this.fb.control(''),
      roles: this.fb.control([this.selectedRole])
    })

    this.roles = [
      { id: 1, name: 'ADMIN' },
      { id: 8, name: 'SUPERADMIN' },
      { id: 9, name: 'USER' },
      { id: 10, name: 'INGENIEUR' },
      { id: 11, name: 'ANALYSTE' }
    ];
  }
  addUser(){
    console.log(this.userForm.value)
    this.selectedRole = this.roles.find(r=> r.name.includes(this.userForm.value.roles))
    const userData = {
      username: this.userForm.value.username,
      matricule: this.userForm.value.matricule,
      telephone: this.userForm.value.telephone,
      email: this.userForm.value.email,
      password: this.userForm.value.password,
      roles: [{id:this.selectedRole.id,name:'ROLE_'+this.selectedRole.name}] // Get the selected role
    };
    console.log(userData)
    this.userService.create(userData).subscribe({
      next:(data)=>{
        console.log(this.selectedRole)
        console.log(data)
      this.router.navigateByUrl('/gestion-utilisateurs') 
      },
      error:(err)=>{ 
        console.log(err)
      }
    })
    
    
  }
  gUser(){
    this.router.navigateByUrl('gestion-utilisateurs')
  }
}
