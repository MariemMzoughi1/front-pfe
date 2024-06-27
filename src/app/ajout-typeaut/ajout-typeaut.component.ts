import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TypeAutorisationService } from '../services/type-autorisation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-typeaut',
  templateUrl: './ajout-typeaut.component.html',
  styleUrls: ['./ajout-typeaut.component.css']
})
export class AjoutTypeautComponent implements OnInit{
  typeForm!: FormGroup
  constructor(private fb:FormBuilder, private typeService: TypeAutorisationService, private router:Router) {
    
  }
ngOnInit(): void {
this.typeForm=this.fb.group({
  codetypeautorisation:this.fb.control(''),
  libtypeautorisation :this.fb.control(''),
  
})
}
addType(){
console.log(this.typeForm.value)
this.typeService.create(this.typeForm.value).subscribe({
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

