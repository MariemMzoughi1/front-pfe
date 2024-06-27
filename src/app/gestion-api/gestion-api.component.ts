import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../services/api.service';
import { Api } from '../models/api.request';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-gestion-api',
  templateUrl: './gestion-api.component.html',
  styleUrls: ['./gestion-api.component.css']
})
export class GestionApiComponent implements OnInit{
  apiItem!:Api
apiList!:Api[]
  constructor(private route:Router, private apiService:APIService, private router:Router){}
 ngOnInit(): void {
   this.apiService.getAll().subscribe({
    next:(data)=>{
      this.apiList=data
      console.log(this.apiList)
    },
    error:(err)=>console.log(err)
   })
 } 
  ajoutapi(){
    this.route.navigate(['/ajout-api']);
  }
  modifApi(code_API:string) {
    this.route.navigateByUrl('/modif-api/'+code_API);
  }
  consultApi(item: any) {
    this.apiService.get(item.code_API).subscribe({
      next:(data)=>{
        this.apiItem=data
        console.log(data)
      
      }

  })

  

}

generatePdf(item: any): void {
  const doc = new jsPDF();
  doc.text('API Details', 88, 10);
  doc.text(`Code API: ${item.code_API}`, 10, 30);
  doc.text(`Libelle API: ${item.libelle_API}`, 10, 40);
  doc.text(`Description: ${item.description}`, 10, 50);
  doc.text(`URL Demo: ${item.url_demo}`, 10, 70);
  doc.text(`URL Prod: ${item.url_prod}`, 10, 80);
  doc.text(`Date Creation: ${item.date_creation.slice(0,10)}`, 130, 100);
  doc.save('Contrat.pdf');
}

deleteApi(item:any) {
  this.apiService.delete(item.code_API).subscribe({
    next:(data)=> {
      console.log(data)
      

    }
  })
}

isDeleted() {
  window.location.reload()
}
}
