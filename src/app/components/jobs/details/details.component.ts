import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import { jobsProfile } from 'src/app/modal';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private httpservice: HttpService, private route: ActivatedRoute,private router:Router,private restrationservice:RegistrationService,private cdr: ChangeDetectorRef) { }

  jobsDetails: jobsProfile[] =[];
   item!:jobsProfile|undefined
  loadspinner: boolean = false;
  jobsId: string | null = null;  
  loggedIn:boolean=false;
  

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {
      this.jobsId = params.get('id');  
      this.getJobsData();  
      this.restrationservice.currentUser.subscribe((val)=>{
        this.loggedIn=val?true:false
        this.cdr.markForCheck();
        console.log(this.loggedIn,'this is loggedIn');
      })
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
