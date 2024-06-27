import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationService } from '../services/application.service';

@Component({
  selector: 'app-modif-app',
  templateUrl: './modif-app.component.html',
  styleUrls: ['./modif-app.component.css']
})
export class ModifAppComponent implements OnInit {
  isDisabled: boolean = true;
  code!:string
  editFormGroup!: FormGroup
  constructor(private activedRoute: ActivatedRoute,
    private fb: FormBuilder,private applicationService:ApplicationService,private router:Router) { 
      this.code = this.activedRoute.snapshot.params['code']
    }

  ngOnInit(): void {
    this.applicationService.get(this.code).subscribe({
      next:(data)=>{
        console.log(data)
        this.editFormGroup = this.fb.group({
          code_application:this.fb.control(data.code_application),
          libelle_application :this.fb.control(data.libelle_application),
          proprietaire :this.fb.control(data.proprietaire),
          admin :this.fb.control(data.admin)
        })
      }
    })
    
  }

  modifApplication() {
this.applicationService.update(this.editFormGroup.value).subscribe({
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
