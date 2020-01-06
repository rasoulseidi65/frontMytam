import { MytamwebserviceService } from "./../../../services/mytamwebservice.service";
import {
  Validators,
  FormGroup,
  FormControl,
  FormBuilder
} from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-productnew",
  templateUrl: "./productnew.component.html",
  styleUrls: ["./productnew.component.scss"]
})
export class ProductnewComponent implements OnInit {
  public imagePath;
  imgURL: any;
  public message: string;
  uplodefile: string;
  fileName: string;
  successResult:boolean=false;
  myForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: MytamwebserviceService
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ["", Validators.required],
      code: ["", Validators.required],
      price: ["", Validators.required],
      price_garranty: ["", Validators.required],
      use: ["", Validators.required],
      number: ["", Validators.required],
      keyword: ["", Validators.required],
      description: ["", Validators.required],
      image: ["", Validators.required],
      exist: ["", Validators.required],
      active: ["", Validators.required]
    });
  }
  get name() {
    return this.myForm.get("name");
  }
  get code() {
    return this.myForm.get("code");
  }
  get price() {
    return this.myForm.get("price");
  }
  get price_garranty() {
    return this.myForm.get("price_garranty");
  }
  get use() {
    return this.myForm.get("use");
  }
  get keyword() {
    return this.myForm.get("keyword");
  }
  get number() {
    return this.myForm.get("number");
  }
  get description() {
    return this.myForm.get("description");
  }
  get active() {
    return this.myForm.get("active");
  }
  get image() {
    return this.myForm.get("image");
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
    this.service.postUplodeFile(formDataUploadfile).subscribe(
      responseimg => {
        console.log(responseimg.data.path);
        if ((responseimg.success = true)) {
          form.value.image = responseimg.data.path;
          this.service.postProduct(form.value).subscribe(
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
