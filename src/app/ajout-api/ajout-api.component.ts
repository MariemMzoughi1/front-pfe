import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { APIService } from '../services/api.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-ajout-api',
  templateUrl: './ajout-api.component.html',
  styleUrls: ['./ajout-api.component.css']
})
export class AjoutApiComponent implements OnInit{
    apiForm!: FormGroup
    constructor(private fb:FormBuilder, private apiService: APIService, private router:Router) {
      
    }
ngOnInit(): void {
  this.apiForm=this.fb.group({
    code_API :this.fb.control(''),
    libelle_API :this.fb.control(''),
    description :this.fb.control(''),
    contrat :this.fb.control(''),
    date_creation :this.fb.control(''),
    url_demo :this.fb.control(''),
    url_prod :this.fb.control(''),
    codesysteme :this.fb.control('')
  })
}
addApi(){
  console.log(this.apiForm.value)
  this.apiService.create(this.apiForm.value).subscribe({
    next:(data)=>{
      console.log(data)
      this.router.navigateByUrl('/gestion-api')
    },
    error:(err)=>{
      console.log(err)
    }
  })
}
gApi(){
  this.router.navigateByUrl('gestion-api')
}
}
