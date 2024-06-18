import { Injectable } from '@angular/core';
import { jobsProfile } from './modal';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  postJobs(data: jobsProfile) {
    return this.http
      .post<jobsProfile>(
        'https://naukriclone-b7b09-default-rtdb.firebaseio.com/jobs.jon',
        data
      )
      .pipe(
        catchError((err) => {
          return this.errorService.handleError(err);
        })
      );
  }
}
