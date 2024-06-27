import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypeAutorisation } from '../models/type-autorisation.request';
import { TypeAutorisationService } from '../services/type-autorisation.service';

@Component({
  selector: 'app-type-autorisation',
  templateUrl: './type-autorisation.component.html',
  styleUrls: ['./type-autorisation.component.css']
})
export class TypeAutorisationComponent implements OnInit{
 typeList!:TypeAutorisation[] 
 typeItem!:TypeAutorisation
  constructor(private route:Router, private typeService:TypeAutorisationService){}
  ngOnInit(): void {
    this.typeService.getAll().subscribe({
     next:(data)=>{
       this.typeList=data
       console.log(this.typeList)
     },
     error:(err)=>console.log(err)
    })
  }

  ajouttypeaut(){
    this.route.navigate(['/ajout-typeaut']);
  }
  modifTypes(codetypeautorisation:string) {
    this.route.navigateByUrl('/modif-type/'+codetypeautorisation);
    console.log(codetypeautorisation)
  }
  consultType(item: any) {
    this.typeService.get(item.codetypeautorisation).subscribe({
      next:(data)=>{
        this.typeItem=data
        console.log(data)
      
      }
  })

}

deleteType (item:any) {
  this.typeService.delete(item.codetypeautorisation).subscribe({
    next:(data)=> {
      console.log(data)
      window.location.reload()

    }
  })
}
}
