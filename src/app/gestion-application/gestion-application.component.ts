import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationService } from '../services/application.service';
import { Application } from '../models/application.request';
import { Api } from '../models/api.request';
import { APIService } from '../services/api.service';
import { SouscriptionsService } from '../services/souscription.service';
import { Souscription } from '../models/souscription.request';

@Component({
  selector: 'app-gestion-application',
  templateUrl: './gestion-application.component.html',
  styleUrls: ['./gestion-application.component.css']
})
export class GestionApplicationComponent implements OnInit{
  sousList!:Souscription[]
  appList!:Application[]
  sousSelected: Souscription[]|null=null
  appItem!:Application
  constructor(private route:Router, private applicationService:ApplicationService, private sousSerivce:SouscriptionsService){}
  ngOnInit(): void {
    this.applicationService.getAll().subscribe({
     next:(data)=>{
       this.appList=data
       console.log(this.appList)
     },
     error:(err)=>console.log(err)
    })
    this.sousSerivce.getAll().subscribe({
      next:(data)=>{
        console.log(this.appItem)
        this.sousList=data
        console.log(this.sousList)
      }
      
    })
  } 
  ajoutapplication(){
    this.route.navigate(['/ajout-application']);
  }
  modifApp(code_application:string) {
    this.route.navigateByUrl('/modif-app/'+code_application);
  }
  consultApp(item: any) {
    this.applicationService.get(item.code_application).subscribe({
      next:(data)=>{
        this.appItem=data
        console.log(data)
      
      }
  })

}

deleteApp (item:any) {
  this.applicationService.delete(item.code_application).subscribe({
    next:(data)=> {
      console.log(data)
      window.location.reload()

    }
  })
}

sousOpen(item:any) {
  this.applicationService.get(item.code_application).subscribe({
    next:(data) =>{
  
      this.sousSelected = this.sousList.filter(item => item.code_application == data.code_application)
      console.log(this.sousList)
      console.log(this.sousSelected)
      console.log(data)
  
    }
  })
}
}
