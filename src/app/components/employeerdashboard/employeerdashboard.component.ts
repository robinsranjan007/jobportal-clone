import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { jobsProfile } from 'src/app/modal';
import { PostjobsComponent } from './postjobs/postjobs.component';
import { HttpService } from 'src/app/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorComponent } from '../error/error.component';

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

  jobsProfileData: jobsProfile[] = [];
  loadspinner: boolean = false;

  ngOnInit(): void {}


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
        console.log('successfully posted', val);
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

  
  
}
