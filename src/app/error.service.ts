import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }


  handleError(err:HttpErrorResponse)
  {
let errMsg=''

if(err.error && err.error.error)
  {
    errMsg= err.error.error
  }
  else
  {
    errMsg ="something went wrong please check your internet connection"
  }

  return throwError( ()=>new Error(errMsg))

  }



}
