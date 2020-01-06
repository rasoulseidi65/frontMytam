import { MytamwebserviceService } from 'src/app/services/mytamwebservice.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  imgURL: any;
  public message: string;
userProfile={
  name:'',
  profile: '',
  mobail: '',
  tell:'',
  postalCode:'',
  address: '',
  city: '',
  country:'',
  email:'',
  password:'',
  type:'',
}
  uplodefile: string;
  fileName: string;
  myForm: FormGroup;
  successResult: boolean = false;
  constructor(
    private service: MytamwebserviceService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ["", Validators.required],
      profile: ["", Validators.required],
      mobail: ["", Validators.required],
      tell: ["", Validators.required],
      postalCode: ["", Validators.required],
      address: ["", Validators.required],
      city: ["", Validators.required],
      country:["", Validators.required],
      email:["", Validators.required],
      password:["", Validators.required],
    
    });
  }
  get name() {
    return this.myForm.get("name");
  }
  get profile() {
    return this.myForm.get("profile");
  }
  get mobail() {
    return this.myForm.get("mobail");
  }
  get tell() {
    return this.myForm.get("tell");
  }
  get postalCode() {
    return this.myForm.get("postalCode");
  }
  get address() {
    return this.myForm.get("address");
  }
  get city() {
    return this.myForm.get("city");
  }
  get country() {
    return this.myForm.get("country");
  }
  get email() {
    return this.myForm.get("email");
  }
  get password() {
    return this.myForm.get("password");
  }
  get type() {
    return this.myForm.get("type");
  }v
  onSubmit(form: FormGroup) {
    const formDataUploadfile = new FormData();
    // console.log(this.uplodefile.length);
    if (this.uplodefile.length > 0) {
      for (var i = 0; i < this.uplodefile.length; i++) {
        formDataUploadfile.append("image", this.uplodefile[i], this.fileName);
      }
      this.service.postUplodeFile(formDataUploadfile).subscribe(
        responseimg => {
          console.log(responseimg);
          if ((responseimg.success = true)) {
            form.value.profile = responseimg.data.path;
            console.log(form.value);
            this.service.postNews(form.value).subscribe(
              response => {
                console.log(response);
                this.successResult = true;
                setTimeout(() => {
                  this.successResult = false;
                }, 6000);
              },
              error => {
                console.log(error);
              }
            );
          } else {
            console.log("erooor");
          }
        },
        error => {
          console.log(error);
        }
      );
    }
  }
  onFileChange(event) {
    this.uplodefile = event.target.files;
    this.fileName = event.target.files.name;

    this.preview(event.target.files);
  }
  preview(files) {
    if (files.length === 0) return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    // this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = _event => {
      this.imgURL = reader.result;
    };
  }

}
