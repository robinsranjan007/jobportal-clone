import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import { jobsProfile } from 'src/app/modal';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private httpservice: HttpService, private route: ActivatedRoute,private router:Router) { }

  jobsDetails: jobsProfile[] =[];
   item!:jobsProfile|undefined
  loadspinner: boolean = false;
  jobsId: string | null = null;  

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {
      this.jobsId = params.get('id');  
      this.getJobsData();  
    });
    
    
  }

  getJobsData() {
    this.loadspinner = true;
    this.httpservice.getJobs().subscribe({
      next: (res: jobsProfile[]) => {
        this.loadspinner = false;
        this.jobsDetails=res
        if (this.jobsId) {
          this.getsingleDetails(this.jobsId);  
        }
      },
      error: (err: HttpErrorResponse) => {
        this.loadspinner = false;
        this.httpservice.openErrorModal(err.message);  
      }
    });
  }

getsingleDetails(id:string|null)
{
  this.item=this.jobsDetails.find((val)=>val.id ===id);
  
}

gotoCv(id:string|undefined)
{
  this.router.navigate(['/jobs/details/cv',id])
}
 
}
