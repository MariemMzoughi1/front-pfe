import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SouscriptionsService } from '../services/souscription.service';
import { Router } from '@angular/router';
import { Souscription } from '../models/souscription.request';

@Component({
  selector: 'app-gestion-souscription',
  templateUrl: './gestion-souscription.component.html',
  styleUrls: ['./gestion-souscription.component.css']
})
export class GestionSouscriptionComponent implements OnInit{
  sousForm!: FormGroup
  sousList!: Souscription[]
  constructor(private fb:FormBuilder, private sousService: SouscriptionsService, private router:Router) {
    
  }
ngOnInit(): void {
  this.sousService.getAll().subscribe({
    next:(data)=>{
      this.sousList=data
    },
    error:(err)=>console.log(err)
   })
this.sousForm=this.fb.group({
  code_souscription :this.fb.control(''),
  code_API :this.fb.control(''),
  code_application :this.fb.control(''),
  code_type_autorisation :this.fb.control(''),
  code_autorisation :this.fb.control(''),
  date_creation :this.fb.control(''),
  date_expiration :this.fb.control(''),
  cle :this.fb.control(''),
  active :this.fb.control(''),
})
}

  addSous(){
    console.log(this.sousForm.value)
    this.sousService.create(this.sousForm.value).subscribe({
      next:(data)=>{
        console.log(data)
        this.router.navigateByUrl('/gestion-application')
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
}
