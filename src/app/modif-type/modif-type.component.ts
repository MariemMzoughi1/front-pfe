import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeAutorisationService } from '../services/type-autorisation.service';

@Component({
  selector: 'app-modif-type',
  templateUrl: './modif-type.component.html',
  styleUrls: ['./modif-type.component.css']
})
export class ModifTypeComponent implements OnInit {
  isDisabled: boolean = true;
  code!:string
  editFormGroup!: FormGroup
  constructor(private activedRoute: ActivatedRoute,
    private fb: FormBuilder,private typeService:TypeAutorisationService,private router:Router) { 
      this.code = this.activedRoute.snapshot.params['code']
    }

  ngOnInit(): void {
    this.typeService.get(this.code).subscribe({
      next:(data)=>{
        console.log(data)
        this.editFormGroup = this.fb.group({
          codetypeautorisation:this.fb.control(data.codetypeautorisation),
          libtypeautorisation :this.fb.control(data.libtypeautorisation)
        })
      }
    })
    
  }

  modifType() {
this.typeService.update(this.editFormGroup.value).subscribe({
  next:(data)=>{
    console.log(data)
    this.router.navigateByUrl('/type-autorisation')
  },
  error:(err)=>{
    console.log(err)
  }
})
  }
  gType(){
    this.router.navigateByUrl('type-autorisation')
  }
  
}


