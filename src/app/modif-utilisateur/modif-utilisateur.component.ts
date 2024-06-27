import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-modif-utilisateur',
  templateUrl: './modif-utilisateur.component.html',
  styleUrls: ['./modif-utilisateur.component.css']
})
export class ModifUtilisateurComponent implements OnInit {
  isDisabled: boolean = true;
  code!:string
  editFormGroup!: FormGroup
  selectedRole!: number ;
  roles: any[] = []; // Define your roles here
  existingUserData: any 

  constructor(private activedRoute: ActivatedRoute,
    private fb: FormBuilder,private userService:UserService,private router:Router) { 
      this.code = this.activedRoute.snapshot.params['code']
    }

  ngOnInit(): void {
    this.userService.get(this.code).subscribe({
      next:(data)=>{
        console.log(data)
        this.selectedRole= data.roles[0].id
        console.log(this.selectedRole)
        this.editFormGroup = this.fb.group({
          id: this.fb.control(data.id),
          username :this.fb.control(data.username),
          matricule :this.fb.control(data.matricule),
          roles :this.fb.control(data.roles[0].name),
          email :this.fb.control(data.email),
          telephone :this.fb.control(data.telephone),
        })

      }
    })

    this.roles = [
      { id: 1, name: 'ADMIN' },
      { id: 8, name: 'SUPERADMIN' },
      { id: 9, name: 'USER' },
      { id: 10, name: 'INGENIEUR' },
      { id: 11, name: 'ANALYSTE' }
    ];
    
  }

  modifUtilisateur() {
    let selected = this.roles.find(r=> r.id == this.editFormGroup.value.roles)
    const userData = {
      id:this.editFormGroup.value.id,
      username: this.editFormGroup.value.username,
      matricule: this.editFormGroup.value.matricule,
      telephone: this.editFormGroup.value.telephone,
      email: this.editFormGroup.value.email,
      password: this.editFormGroup.value.password,
      roles: [{id:selected.id,name:'ROLE_'+selected.name}] // Get the selected role
    };
    console.log(userData)
this.userService.update(userData).subscribe({
  next:(data)=>{
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



