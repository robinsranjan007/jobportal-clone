import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private httpserive:RegistrationService) { }

  login:boolean=false

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
    if(!this.login)
      {
        
        this.httpserive.loggin(userData)
      }
      else
      {
        
        this.httpserive.signinUp(userData)
        
      }
  }



}
