import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemeService } from '../services/systeme.service';
import { Systeme } from '../models/systeme.request';
@Component({
  selector: 'app-gestion-systeme',
  templateUrl: './gestion-systeme.component.html',
  styleUrls: ['./gestion-systeme.component.css']
})
export class GestionSystemeComponent implements OnInit{
systemeList!:Systeme[]
systemItem!:Systeme
  constructor(private route:Router, private systemeService:SystemeService){}
  ngOnInit(): void {
    this.systemeService.getAll().subscribe({
     next:(data)=>{
       this.systemeList=data
       console.log(this.systemeList)
     },
     error:(err)=>console.log(err)
    })
  }

  ajoutsysteme(){
    this.route.navigate(['/ajout-systeme']);
  }
  modifSys(codesysteme:string) {
    this.route.navigateByUrl('/modif-systeme/'+codesysteme);
  }

  consultSys(item: any) {
    this.systemeService.get(item.codesysteme).subscribe({
      next:(data)=>{
        this.systemItem=data
        console.log(data)
      
      }
  })

}

deleteSys (item:any) {
  this.systemeService.delete(item.codesysteme).subscribe({
    next:(data)=> {
      console.log(data)
      window.location.reload()

    }
  })
}
}

