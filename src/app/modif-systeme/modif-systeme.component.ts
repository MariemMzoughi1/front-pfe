import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemeService } from '../services/systeme.service';

@Component({
  selector: 'app-modif-systeme',
  templateUrl: './modif-systeme.component.html',
  styleUrls: ['./modif-systeme.component.css']
})
export class ModifSystemeComponent  implements OnInit {
  isDisabled: boolean = true;
  code!:string
  editFormGroup!: FormGroup
  constructor(private activedRoute: ActivatedRoute,
    private fb: FormBuilder,private systemeService:SystemeService,private router:Router) { 
      this.code = this.activedRoute.snapshot.params['code']
    }

  ngOnInit(): void {
    this.systemeService.get(this.code).subscribe({
      next:(data)=>{
        console.log(data)
        this.editFormGroup = this.fb.group({
          codesysteme:this.fb.control(data.codesysteme),
          libsysteme :this.fb.control(data.libsysteme),
          nature :this.fb.control(data.nature)
        })
      }
    })
    
  }

  modifSys() {
this.systemeService.update(this.editFormGroup.value).subscribe({
  next:(data)=>{
    console.log(data)
    this.router.navigateByUrl('/gestion-systeme')
  },
  error:(err)=>{
    console.log(err)
  }
})
  }
  gSys(){
    this.router.navigateByUrl('gestion-systeme')
  }
}

