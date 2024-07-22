import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { RegistrationService } from './registration.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService  implements CanActivate{

  constructor(private registrationService:RegistrationService,private router :Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.registrationService.currentUser.pipe(take(1),
        map((val)=>{
          if(val){
            return true;
          }
          else
          {
            return this.router.createUrlTree(['/naukri'])
          }
        })
    )
  }
}
