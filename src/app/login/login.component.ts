import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  //constructor(private router:Router){}

  email ='example@gmail.com'
  password='12345'
  userName = "example@gmail.com"
  psd = "12345"
 flag = true;
invalidCredential='Invalid Credential'

  login(){
    //this.router.navigate(['/'])    
     alert('Login Component Called')

  }

}
