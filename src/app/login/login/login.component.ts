import { Router } from '@angular/router';
import { MytamwebserviceService } from "./../../services/mytamwebservice.service";
import { Validators } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
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
    this.service.getLoginUser(form.value).subscribe(
      (response)=>{
        var success=response['success'];
        if(success=true)
        {
          this.router.navigate(['/user/panel',response['data']])
        }
      }
    )

  }
}
