import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import { Curriculumvitae } from 'src/app/modal';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})


export class ApplicationsComponent implements OnInit {

  constructor(private httpservice:HttpService,private router:Router) { }

  ngOnInit(): void {
    this.getCvDetails()
  }

  TABLE_DATA:Curriculumvitae[]=[]
  displayedColumns: string[] = ['number', 'name', 'email','action'];
  dataSource = this.TABLE_DATA;
  loadspinner:boolean=true;


getCvDetails()
{
  this.httpservice.getCv().subscribe(
    {
      next:(val:Curriculumvitae[])=>{
        this.TABLE_DATA = val
        this.dataSource=this.TABLE_DATA
        this.loadspinner=false
      },
      error:(err)=>{
        this.httpservice.openErrorModal(err)
        this.loadspinner=false
      }
    }
  )
}


onView(id:string|undefined): void {
  this.router.navigate(['applications/applicants',id])
}
 
}
