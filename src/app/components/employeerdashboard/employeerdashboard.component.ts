import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';
import { jobsProfile } from 'src/app/modal';
import { PostjobsComponent } from './postjobs/postjobs.component';
import { HttpService } from 'src/app/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorComponent } from '../error/error.component';
import { DescriptionmodalComponent } from './descriptionmodal/descriptionmodal.component';

@Component({
  selector: 'app-employeerdashboard',
  templateUrl: './employeerdashboard.component.html',
  styleUrls: ['./employeerdashboard.component.css'],
})
export class EmployeerdashboardComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private httpservice: HttpService,
    private _snackBar: MatSnackBar
  ) {}
  @ViewChild('deleteJobPost') deleteJobPost!: TemplateRef<any>;
  jobsProfileData: jobsProfile[] = [];
  loadspinner: boolean = false;

  ngOnInit(): void {

    this.getjobs()

  }


  openPopUpModal() {
    const matdialog = this.dialog.open(PostjobsComponent, {
      width: '80%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      disableClose: true,
    });
    matdialog.afterClosed().subscribe((val) => {
      console.log(val, 'this is value');
      this.postJobs(val);  
    });
  }

  
  postJobs(val: jobsProfile) {
    this.loadspinner = true;
    this.httpservice.postJobs(val).subscribe({
      next: (val) => {
        console.log('successfully posted', val)
        this.getjobs()
        this.loadspinner = false;
        this.openSnackBar();
      },

      error: (err: HttpErrorResponse) => {
        this.loadspinner = false;
        console.log(err.message);
        this.openErrorModal(err.message)
      },

    });
  }

getjobs()
{
  this.loadspinner=true
  this.httpservice.getJobs().subscribe({
    next:((val)=>{
      this.loadspinner = false;
      this.jobsProfileData =val;
      console.log(val,'this is the data fetched');
      
    }),
    error: (err: HttpErrorResponse) => {
      this.loadspinner = false;
      this.openErrorModal(err.message)
    },

  })
}


deleteJobModal(id:string|undefined)
{
const dialogRef=this.dialog.open(this.deleteJobPost,{
  width: '50%',
  enterAnimationDuration: '1000ms',
  exitAnimationDuration: '1000ms',
  disableClose: true,
})

dialogRef.afterClosed().subscribe((val)=>{
  console.log(val);
if(val==='yes')
  {
    this.deleteJob(id)
  }
})

}



deleteJob(id:string|undefined)
{
  this.loadspinner=true
  this.httpservice.deleteJobs(id).subscribe(
    {
      next:(val)=>{
        this.loadspinner = false;
        this.getjobs()
      },
      error: (err: HttpErrorResponse) => {
        this.loadspinner = false;
        this.openErrorModal(err.message)
      },
      
    }
  )
}


  openSnackBar() {
    this._snackBar.open('successfully posted!!', 'click here to continue!!', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  openErrorModal(errMsg:string) {
  const errorModal=  this.dialog.open(ErrorComponent, {
      width: '80%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      disableClose: true,
      data:errMsg
    });
  }


  openDescriptionModal(detailDescription:string)
  {
    this.dialog.open(DescriptionmodalComponent,{
      width:'70%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      disableClose: true,
      data: detailDescription
    })
  }

  
  
}
