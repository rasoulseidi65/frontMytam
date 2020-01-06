import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    })
  }
  get email() {
    return this.myForm.get("email");
  }
  get password() {
    return this.myForm.get("password");
  }
  onSubmit(form:FormGroup){
    console.log(form.value);
  }

}
