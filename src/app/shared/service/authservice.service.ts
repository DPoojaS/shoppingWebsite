import { ObserversModule } from '@angular/cdk/observers';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  loggedIn : boolean = false;
  constructor() { }

  isAuthenticated():Observable<boolean>{
    return new Observable(observer =>{
      setTimeout(() =>{
        // this.loggedIn = localStorage.getItem('getData');
        observer.next(this.loggedIn)
      },2000)
    })
  }

  logIn(){
    this.loggedIn= true
  }
  logOut(){
    this.loggedIn = false
  }
}
