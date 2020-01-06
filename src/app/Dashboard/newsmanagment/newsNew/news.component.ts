import { Component, OnInit, ViewChild } from "@angular/core";
import { MytamwebserviceService } from "src/app/services/mytamwebservice.service";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormArray
} from "@angular/forms";
@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"]
})
export class NewsComponent implements OnInit {
  imgURL: any;
  public message: string;

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
      title: ["", Validators.required],
      abstract: ["", Validators.required],
      detail: ["", Validators.required],
      keyword: ["", Validators.required],
      key_title: ["", Validators.required],
      active: ["", Validators.required],
      group_name: ["", Validators.required],
      date:["", Validators.required],
      time:["", Validators.required],
    });
  }
  get title() {
    return this.myForm.get("title");
  }
  get abstract() {
    return this.myForm.get("abstract");
  }
  get detail() {
    return this.myForm.get("detail");
  }
  get keyword() {
    return this.myForm.get("keyword");
  }
  get key_title() {
    return this.myForm.get("key_title");
  }
  get active() {
    return this.myForm.get("active");
  }
  get group_name() {
    return this.myForm.get("group_name");
  }
  get date() {
    return this.myForm.get("date");
  }
  get time() {
    return this.myForm.get("time");
  }
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
            form.value.image = responseimg.data.path;
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
