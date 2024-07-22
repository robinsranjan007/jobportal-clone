import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  handleError(error: HttpErrorResponse) {
    let errMsg: string;
   console.log(error);
   
    if (error.error) {
      if (error.error.error) {
        if (error.error.error.message) {
           
          errMsg = error.error.error.message;
        } else {
        
          errMsg = error.error.error;
        }
      } else {
        // If there's an error body but no specific error object
        errMsg = JSON.stringify(error.error);
      }
    } else {
      // If there's no error body
      errMsg = "Something went wrong, please check your internet connection";
    }
  
    return throwError(() => new Error(errMsg));
  }



}
