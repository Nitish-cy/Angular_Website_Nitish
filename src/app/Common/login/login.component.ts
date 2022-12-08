import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
loginform=new FormGroup({
  user:new FormControl(''),
  password:new FormControl('')
})
SignIn()
{
  console.warn(this.loginform.value);
}
}
