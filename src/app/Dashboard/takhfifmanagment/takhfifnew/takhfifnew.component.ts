import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-takhfifnew',
  templateUrl: './takhfifnew.component.html',
  styleUrls: ['./takhfifnew.component.scss']
})
export class TakhfifnewComponent implements OnInit {
  public imagePath;
  imgURL: any;
  public message: string;
 uplodefile: string;
  fileName:string;

 myForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.myForm = this.fb.group({
      product_Id: ['', Validators.required],
      title: ['', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      offer_type: ['', Validators.required],
      offer_code: ['', Validators.required],
      percent_offer: ['', Validators.required],
      max_count: ['', Validators.required],
      used_count: ['', Validators.required],
      active: ['', Validators.required],

    });
  }
  get product_Id() {
    return this.myForm.get("product_Id");
  }
  get title() {
    return this.myForm.get("title");
  }
  get offer_type() {
    return this.myForm.get("offer_type");
  }
  get offer_code() {
    return this.myForm.get("offer_code");
  }
  get start_date() {
    return this.myForm.get("start_date");
  }
  get end_date() {
    return this.myForm.get("end_date");
  }
  get percent_offer() {
    return this.myForm.get("percent_offer");
  }
  get max_count() {
    return this.myForm.get("max_count");
  }
  get active() {
    return this.myForm.get("active");
  }
  get used_count() {
    return this.myForm.get("used_count");
  }
  onFileChange(event) {
    this.uplodefile = event.target.files;
    this.fileName= event.target.files.name;
    this.preview( event.target.files);
  }
  preview(files) {
    if (files.length === 0) return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader
    reader.readAsDataURL(files[0]);
    reader.onload = _event => {
      this.imgURL = reader.result;
    };
  }
  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('product_Id', form.value.product_Id);
    console.log('title', form.value.title);

  }

}
