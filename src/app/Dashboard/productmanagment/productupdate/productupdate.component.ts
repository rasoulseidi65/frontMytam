import { ActivatedRoute } from "@angular/router";
import { MytamwebserviceService } from "src/app/services/mytamwebservice.service";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-productupdate",
  templateUrl: "./productupdate.component.html",
  styleUrls: ["./productupdate.component.scss"]
})
export class ProductupdateComponent implements OnInit {
  @Input() id:String;
  successResult: boolean = false;
  product={
    name:'',
    code:'',
    price:'',
    price_garranty:'',
    use:'',
    number:'',
    keyword:'',
    alt_img:'',
    description:'',
    image:'',
    exist:'',
    active:'',
  }
  public imagePath;
  imgURL: any;
  public message: string;
  uplodefile: string;
  fileName: string;
  formGroup: FormGroup;
  myForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: MytamwebserviceService,
    private route: ActivatedRoute
  ) {

    this.route.paramMap.subscribe(params => (this.id = params.get("id")));
    this.readProduct();
  }

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
          this.service.updateProduct(this.id,form.value).subscribe(
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
  readProduct() {
    this.service.getProductID(this.id).subscribe(
      (data) => {
        console.log(data);
        var l=data;
        this.product.name= l['data']['name'];
        this.product.code= l['data']['code'];
        this.product.price= l['data']['price'];
        this.product.price_garranty= l['data']['price_warranty'];
        this.product.use= l['data']['use'];
        this.product.number= l['data']['number'];
        this.product.keyword= l['data']['keyword'];
        this.product.alt_img=l['data']['alt_img'];
        this.product.description=l['data']['description'];
        this.product.image=l['data']['image'];
        this.product.exist=l['data']['exist'];
        this.product.active=l['data']['active'];
      },

      (error: any) => {
        console.log(error);
      }
    );
  }
}
