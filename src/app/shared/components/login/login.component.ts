import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardService } from '../../service/auth-guard.service';
import { AuthserviceService } from '../../service/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  getUsername! : string;
  canEdit : boolean = false
  constructor(private router : Router,
    private authService : AuthserviceService) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.loginForm = new FormGroup({
      username : new FormControl(null, [Validators.required]),
      password : new FormControl(null, [Validators.required]),
    })
  }
  onLoginForm(){
    console.log(this.loginForm.value);
    this.authService.logIn()
    this.getUsername = this.loginForm.value.username
    if(this.getUsername === 'Admin'){
      localStorage.setItem('userRole', this.getUsername);      
      this.router.navigate(['/admincart'])
    }else if(this.getUsername === 'User'){
      localStorage.setItem('userRole', this.getUsername);      
      this.router.navigate(['/'])
    }else{
      console.log(  'no match found');
     
    }
  }

}
