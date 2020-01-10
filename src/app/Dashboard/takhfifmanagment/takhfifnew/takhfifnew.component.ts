import { MytamwebserviceService } from './../../../services/mytamwebservice.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-takhfifnew',
  templateUrl: './takhfifnew.component.html',
  styleUrls: ['./takhfifnew.component.scss']
})
export class TakhfifnewComponent implements OnInit {
  public imagePath;
  successResult:boolean=false;
  imgURL: any;
  public message: string;
 uplodefile: string;
  fileName:string;

 myForm: FormGroup;
  constructor(private fb: FormBuilder , private service :MytamwebserviceService) { }

  ngOnInit() {

    this.myForm = this.fb.group({
      product_Id: ['', Validators.required],

      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      offer_type: ['', Validators.required],
      offer_code: ['', Validators.required],
      percent_offer: ['', Validators.required],
      max_number: ['', Validators.required],
      remain_number: ['', Validators.required],
      active: ['', Validators.required],

    });
  }
  get product_Id() {
    return this.myForm.get("product_Id");
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
  get max_number() {
    return this.myForm.get("max_number");
  }
  get active() {
    return this.myForm.get("active");
  }
  get remain_number() {
    return this.myForm.get("remain_number");
  }

  onSubmit(form: FormGroup) {

            this.service.postOffer(form.value).subscribe(
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
          }



}
