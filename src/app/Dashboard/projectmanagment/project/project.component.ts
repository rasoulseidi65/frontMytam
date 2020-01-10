import { MytamwebserviceService } from 'src/app/services/mytamwebservice.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  public imagePath;
  imgURL: any;
  public message: string;
  uplodefile: string;
  fileName: string;
  successResult: boolean = false;
  myForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: MytamwebserviceService
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      image: ["", Validators.required],
      title: ["", Validators.required],
      feature: ["", Validators.required],
      alt_img: ["", Validators.required],
      keyword: ["", Validators.required]
    });
  }
  get image() {
    return this.myForm.get("image");
  }
  get title() {
    return this.myForm.get("title");
  }
  get feature() {
    return this.myForm.get("feature");
  }
  get alt_img() {
    return this.myForm.get("alt_img");
  }
  get keyword() {
    return this.myForm.get("keyword");
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
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = _event => {
      this.imgURL = reader.result;
    };
  }
  onSubmit(form: FormGroup) {
    const formDataUploadfile = new FormData();

    if (this.uplodefile.length > 0) {
      for (var i = 0; i < this.uplodefile.length; i++) {
        formDataUploadfile.append("image", this.uplodefile[i], this.fileName);
      }
    }
    this.service.postUplodeFile(formDataUploadfile).subscribe(responseimg => {
      console.log(responseimg.data.path);
      if ((responseimg.success = true)) {
        form.value.image = responseimg.data.path;
        this.service.postProjectus(form.value).subscribe(
          response => {

            this.successResult = true;
            setTimeout(() => {
              this.successResult = false;
            }, 6000);
          },
          error => {
            console.log(error);
          }
        );
      }
    });
  }

}
