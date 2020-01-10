import { MytamwebserviceService } from './../../../services/mytamwebservice.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newsupdate',
  templateUrl: './newsupdate.component.html',
  styleUrls: ['./newsupdate.component.scss']
})
export class NewsupdateComponent implements OnInit {
  @Input() id:string;
  successResult:boolean=false;
  news={
    title:'',
    abstract:'',
    detail:'',
    keyword:'',
    key_title:'',
    active:'',
    group_name:'',
    image:'',
    date:'',
    time:''
  }
  public imagePath;
  imgURL: any;
  public message: string;

  uplodefile: string;
  fileName:string;
  myForm: FormGroup;
  constructor(
    private service: MytamwebserviceService,
    private  fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe( params =>
      this.id = params.get('id'));
  }

  ngOnInit() {

    this.myForm = this.fb.group({
      title: ['', Validators.required],
      abstract:['', Validators.required],
      detail:['', Validators.required],
      keyword: ['', Validators.required],
      key_title: ['', Validators.required],
      active: ['', Validators.required],
      group_name: ['', Validators.required],
      time: ['', Validators.required],
    });
    this.readNews();
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
  readNews() {
    this.service.getNewsID(this.id).subscribe(
      (data) => {
        console.log(data);
        var l=data;
        this.news.title= l['data']['title'];
        this.news.abstract= l['data']['abstract'];
        this.news.group_name= l['data']['group_name'];
        this.news.key_title= l['data']['key_title'];
        this.news.active= l['data']['active'];
        this.news.detail= l['data']['detail'];
        this.news.keyword= l['data']['keyword'];
        this.news.image=l['data']['image'];
        this.news.date=l['data']['date'];
        this.news.time=l['data']['time'];
      },

      (error: any) => {
        console.log(error);
      }
    );
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
            // console.log(this.id);
            this.service.updateNews(this.id,form.value).subscribe(
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
    this.fileName= event.target.files.name;
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

}
