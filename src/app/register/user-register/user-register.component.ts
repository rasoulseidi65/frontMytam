import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MytamwebserviceService } from 'src/app/services/mytamwebservice.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  myForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: MytamwebserviceService,
    private router:Router
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
  get email() {
    return this.myForm.get("email");
  }
  get password() {
    return this.myForm.get("password");
  }
  onSubmit(form: FormGroup) {
    this.service.getRegisterUser(form.value).subscribe(
      (response)=>{
        var success=response['success'];
        if(success=true)
        {
          this.router.navigate(['']);
        console.log(success);
        }
      }
    )

  }
}
