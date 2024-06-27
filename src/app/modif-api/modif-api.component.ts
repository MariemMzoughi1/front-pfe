import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-modif-api',
  templateUrl: './modif-api.component.html',
  styleUrls: ['./modif-api.component.css']
})
export class ModifApiComponent implements OnInit {
  isDisabled: boolean = true;
  code!:string
  editFormGroup!: FormGroup
  constructor(private activedRoute: ActivatedRoute,
    private fb: FormBuilder,private apiService:APIService,private router:Router) { 
      this.code = this.activedRoute.snapshot.params['code']
    }

  ngOnInit(): void {
    this.apiService.get(this.code).subscribe({
      next:(data)=>{
        console.log(data)
        this.editFormGroup = this.fb.group({
          code_API :this.fb.control(data.code_API),
          libelle_API :this.fb.control(data.libelle_API),
          description :this.fb.control(data.description),
          contrat :this.fb.control(data.contrat),
          date_creation :this.fb.control(data.date_creation),
          url_demo :this.fb.control(data.url_demo),
          url_prod :this.fb.control(data.url_prod),
          codesysteme :this.fb.control(data.codesysteme)
        })
      }
    })
    
  }

  modifApi() {
this.apiService.update(this.editFormGroup.value).subscribe({
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
