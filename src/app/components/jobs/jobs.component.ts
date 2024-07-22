import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from 'src/app/http.service';
import { jobsProfile } from 'src/app/modal';
 
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor(private httpservice : HttpService,private router:Router) { }


  loadspinner:boolean=false;
  jobsData:jobsProfile[]=[]

  ngOnInit(): void {
  this.getJobs()
  }




getJobs()
{
  this.loadspinner=true;
  this.httpservice.getJobs().subscribe({
    next:(val)=>{
      this.loadspinner=false;
      this.jobsData=val;
      console.log(this.jobsData, 'Jobs data fetched successfully');
    },
    error:(err:HttpErrorResponse)=>{
      this.loadspinner=false;
      this.httpservice.openErrorModal(err.message)
      
      
    }
  })
}

goToDetails(id:string|undefined)
{
  this.router.navigate(['/jobs/details/', id]);
}


}
