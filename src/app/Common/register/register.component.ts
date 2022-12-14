import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  register=new FormGroup({
    user:new FormControl(''),
    password:new FormControl(''),
    email:new FormControl(''),
    Mobile:new FormControl(''),
    Address:new FormControl('')
  })
  SignUp()
{
  console.table(this.register.value);
  alert(this.register.value);
}
}
