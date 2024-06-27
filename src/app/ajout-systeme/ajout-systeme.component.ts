import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SystemeService } from '../services/systeme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-systeme',
  templateUrl: './ajout-systeme.component.html',
  styleUrls: ['./ajout-systeme.component.css']
})
export class AjoutSystemeComponent implements OnInit{
  systemeForm!: FormGroup
  constructor(private fb:FormBuilder, private systemeService: SystemeService, private router:Router) {
    
  }
ngOnInit(): void {
this.systemeForm=this.fb.group({
  codesysteme :this.fb.control(''),
  libsysteme :this.fb.control(''),
  nature :this.fb.control(''),
})
}
addSysteme(){
console.log(this.systemeForm.value)
this.systemeService.create(this.systemeForm.value).subscribe({
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
