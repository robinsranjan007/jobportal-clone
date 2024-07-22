import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { HttpService } from 'src/app/http.service';
import { Authresponse } from 'src/app/modal';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private registrationservice:RegistrationService,private httpservice:HttpService,private router:Router) { }
  loader:boolean=false;
  login:boolean=false

  authObs:Observable<Authresponse>=EMPTY

  ngOnInit(): void {
    this.Form()
  }
  
  signupForm:FormGroup=new FormGroup({})


  loggedIn()
  {
    this.login=!this.login
    this.signupForm.reset()
  }
  Form()
  {
      this.signupForm= new FormGroup({
        email:new FormControl(null,[Validators.required,Validators.email]),
        password:new FormControl(null,[Validators.required])
  })   
  }

  submit()
  {
    const userData=this.signupForm.value
    this.loader=true;
    if(!this.login)
      {
      this.authObs=  this.registrationservice.loggin(userData)
      }
      else
      {
      this.authObs=  this.registrationservice.signinUp(userData)
      }
      this.authObs.subscribe({
        next:((val)=>{
          console.log(val,'login is called');
          this.loader=false;
          this.router.navigate(['/naukri'])
        }),
        error:((err:Error)=>{
          this.loader=false;
          this.httpservice.openErrorModal(err.message)
        })
      })
    this.signupForm.reset()  
  }



 

  

}
