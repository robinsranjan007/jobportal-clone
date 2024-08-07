import { Injectable } from '@angular/core';
import { Curriculumvitae, firebase, jobsProfile } from './modal';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, exhaustMap, map, take, tap } from 'rxjs';
import { ErrorService } from './error.service';
import { ErrorComponent } from './components/error/error.component';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationService } from './registration.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
    private dialog: MatDialog,
    private registrationService: RegistrationService
  ) {}

  postJobs(data: jobsProfile) {
    return this.http
      .post<jobsProfile>(
        'https://naukriclone-b7b09-default-rtdb.firebaseio.com/jobs.json',
        data
      )
      .pipe(
        catchError((err) => {
          return this.errorService.handleError(err);
        })
      );
  }

  getJobs() {
    return this.http
      .get<firebase>(
        'https://naukriclone-b7b09-default-rtdb.firebaseio.com/jobs.json'
      )
      .pipe(
        map((response: firebase) => {
          let jobsArray: jobsProfile[] = [];
          for (let key in response) {
            if (response.hasOwnProperty(key)) {
              jobsArray.push({ ...response[key], id: key });
            }
          }
          return jobsArray;
        }),
        catchError((err: HttpErrorResponse) => {
          return this.errorService.handleError(err);
        })
      );
  }

  deleteJobs(id: string | undefined) {
    return this.http
      .delete<jobsProfile>(
        `https://naukriclone-b7b09-default-rtdb.firebaseio.com/jobs/${id}.json`
      )
      .pipe(
        catchError((err: HttpErrorResponse) => {
          return this.errorService.handleError(err);
        })
      );
  }

  // cv service

  postCv(data: Curriculumvitae) {
    return this.registrationService.currentUser.pipe(
      take(1),
      exhaustMap((val) => {
        return this.http.post<Curriculumvitae>(
          'https://jobportal-cv-default-rtdb.firebaseio.com/cv.json?auth=' +
            val?.idToken,
          data
        );
      }),
      catchError((val) => {
        return this.errorService.handleError(val);
      }),
      tap((val) => {
        console.log(val, 'this is cv value');
      })
    );
  }

  getCv() {
    const url='https://jobportal-cv-default-rtdb.firebaseio.com/cv.json'
    return this.http
      .get<{ [key: string]: Curriculumvitae }>(
        url
      )
      .pipe(
        map((response: { [key: string]: Curriculumvitae }) => {
          let cvarr: Curriculumvitae[] = [];
          for (let key in response) {
            if (response.hasOwnProperty(key)) {
              cvarr.push({ ...response[key], id: key });
            }
          }
          return cvarr;
        })
      );
  }

  openErrorModal(errMsg: string) {
    const errorModal = this.dialog.open(ErrorComponent, {
      width: '80%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      disableClose: true,
      data: errMsg,
    });
  }
}
