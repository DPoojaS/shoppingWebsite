import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private route : ActivatedRoute,
    private router : Router,
    private authService : AuthserviceService) { }
  canActivate(route : ActivatedRouteSnapshot,
    state : RouterStateSnapshot):Promise<boolean> | Observable<boolean> | boolean {
      this.authService.isAuthenticated().subscribe(authenticated =>{
        if(authenticated){
          return true
        }else{
          this.router.navigate(['/'])
          return false
        }
      })
      return true
  }
}
