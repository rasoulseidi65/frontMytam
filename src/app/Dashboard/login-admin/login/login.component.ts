import { Router } from '@angular/router';
import { MytamwebserviceService } from "src/app/services/mytamwebservice.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  body = {
    email: "",
    password: ""
  };
  myForm: FormGroup;
  constructor(
    private service: MytamwebserviceService,
    private fb: FormBuilder,
    private router: Router,
  ) {}
  resolved(captchaResponse: string) {
    this.myForm.value.recaptcha = captchaResponse;
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
      recaptcha: ["", Validators.required]
    });
  }
  get email() {
    return this.myForm.get("email");
  }
  get password() {
    return this.myForm.get("password");
  }
  get recaptcha() {
    return this.myForm.get("recaptcha");
  }
  onSubmit(form: FormGroup) {
    console.log(form.value);
    this.service.getLoginAdmin(form.value).subscribe(response => {
      if (response.success == true) {
        console.log(response.success);
        this.router.navigate(['/admin/panel']);
      }
    });
  }
}
