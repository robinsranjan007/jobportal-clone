import { Injectable } from '@angular/core';
import { Authresponse, login } from './modal';
import {
  HttpClient,
  HttpErrorResponse,
  HttpRequest,
} from '@angular/common/http';
import { BehaviorSubject, catchError, Subject, tap, throwError } from 'rxjs';
import { ErrorService } from './error.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(
    private http: HttpClient,
    private errorServie: ErrorService,
    private router: Router
  ) {}

  currentUser = new BehaviorSubject<Authresponse | null>(null);
  private expireTimer:any

  loggin(data: login) {
    const login = {
      email: data.email,
      password: data.password,
      returnSecureToken: true,
      displayName: 'robins',
    };
    return this.http
      .post<Authresponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAffzTRRqv_uY450DhundYEWvI7FL7z2XE',
        login
      )
      .pipe(
        tap((val) => {
          this.handleUser(val);
        }),
        catchError((err: HttpErrorResponse) => {
          return this.errorServie.handleError(err);
        })
      );
  }

  signinUp(data: login) {
    const signup = {
      email: data.email,
      password: data.password,
      returnSecureToken: true,
    };

    return this.http
      .post<Authresponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAffzTRRqv_uY450DhundYEWvI7FL7z2XE',
        signup
      )
      .pipe(
        tap((res) => {
          this.handleUser(res);
        }),
        catchError((err: HttpErrorResponse) => {
          return this.errorServie.handleError(err);
        })
      );
  }

  autoLogin() {
    let currentuser = localStorage.getItem('user');
    if (!currentuser) {
      return;
    }
    if (currentuser) {
      let cuser = JSON.parse(currentuser);
      if (cuser.idToken) {
        this.currentUser.next(cuser);
        const timmerValue= cuser.expiresIn.getTime()-new Date().getTime()
        this.autologOut(timmerValue)
      }
    }
  }

  handleUser(res: Authresponse) {
    const expiresInTs = new Date().getTime() + +res.expiresIn * 1000;
    const expiresIn = new Date(expiresInTs);
    const user: Authresponse = {
      email: res.email,
      expiresIn: expiresIn,
      idToken: res.idToken,
      kind: false,
      localId: res.localId,
      refreshToken: res.refreshToken,
    };
    console.log('Emitting user:', user);
    this.currentUser.next(user);
    localStorage.setItem('user', JSON.stringify(user));
    this.autologOut(+res.expiresIn*1000)
  }

  logOut() {
    this.currentUser.next(null);
    this.router.navigate(['/naukri']);
    localStorage.removeItem('user')
    if(this.expireTimer)
    {
      clearTimeout(this.expireTimer)
    }
    this.expireTimer=null;

    
  }

  autologOut(expireTime:number)
  {
 this.expireTimer=setTimeout(()=>{
this.logOut()
},expireTime)
  }
}
