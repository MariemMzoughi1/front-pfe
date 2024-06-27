import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicationService } from '../services/application.service';

@Component({
  selector: 'app-ajout-application',
  templateUrl: './ajout-application.component.html',
  styleUrls: ['./ajout-application.component.css']
})
export class AjoutApplicationComponent implements OnInit{
  appForm!: FormGroup
  constructor(private fb:FormBuilder, private applicationService: ApplicationService, private router:Router) {
    
  }
ngOnInit(): void {
this.appForm=this.fb.group({
  code_application :this.fb.control(''),
  libelle_application :this.fb.control(''),
  proprietaire :this.fb.control(''),
  admin :this.fb.control(''),
  code_type_app :this.fb.control('')
})
}
addApp(){
console.log(this.appForm.value)
this.applicationService.create(this.appForm.value).subscribe({
  next:(data)=>{
    console.log(data)
    this.router.navigateByUrl('/gestion-application')
  },
  error:(err)=>{
    console.log(err)
  }
})
}
gApp(){
  this.router.navigateByUrl('gestion-application')
}
}
