import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'jobportal';
  constructor(private registrationService:RegistrationService){}
  ngOnInit(): void {
 this.registrationService.autoLogin()

  }
  
}
