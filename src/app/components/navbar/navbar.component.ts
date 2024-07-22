import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private registrationHttp:RegistrationService,private _snackBar: MatSnackBar) { }

loggedIn:boolean=false;

  ngOnInit(): void {

this.registrationHttp.currentUser.subscribe((val)=>{
  this.loggedIn=val?true:false
})

  }


  onLogout()
  {
    this.registrationHttp.logOut();
    this.loggedIn=false;
    this._snackBar.open( 'you have been logged out','login again to continue  OK', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
   
  }

}
