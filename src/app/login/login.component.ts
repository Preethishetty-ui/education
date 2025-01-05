import { Component, Input } from '@angular/core';
import { FormGroup, FormControl,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login:FormGroup;
  constructor(public router: Router, ){
    this.login = new FormGroup({
      name: new FormControl('',[Validators.required]),
      pword: new FormControl('',[Validators.required])
    })
  }
  onSubmit(){
    if(this.login.valid){  
      this.router.navigateByUrl("/student");
    }
  }
  // parentData = 'Hello from Parent!';
  // booleanData:boolean = true
  childData =123;
}