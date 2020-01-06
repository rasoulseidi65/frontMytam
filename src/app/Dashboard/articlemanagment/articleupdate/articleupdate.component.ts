import { ActivatedRoute } from '@angular/router';
import { MytamwebserviceService } from './../../../services/mytamwebservice.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-articleupdate',
  templateUrl: './articleupdate.component.html',
  styleUrls: ['./articleupdate.component.scss']
})
export class ArticleupdateComponent implements OnInit {
  @Input() id:string;
  public imagePath;
  imgURL: any;
  public message: string;
article={
  title:'',
      abstract:'',
      detail:'',
      keyword: '',
      key_title: '',
      active: '',
      author: '',
      alt_img: '',
      image:'',
      date:'',
      time:''
}
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
    this.readArticle();
    // Create 100 users
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      title: ['', Validators.required],
      abstract:['', Validators.required],
      detail:['', Validators.required],
      keyword: ['', Validators.required],
      key_title: ['', Validators.required],
      active: ['', Validators.required],
      author: ['', Validators.required],
      alt_img: ['', Validators.required],
      time: ['', Validators.required],
      date: ['', Validators.required],
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
  get author() {
    return this.myForm.get("author");
  }
  get alt_img() {
    return this.myForm.get("alt_img");
  }
  get time() {
    return this.myForm.get("time");
  }
  get date() {
    return this.myForm.get("date");
  }
  readArticle() {
    console.log()
    this.service.getArticleID(this.id).subscribe(
      (data) => {
        console.log(data);
        var l=data;
        this.article.title= l['data']['title'];
        this.article.abstract= l['data']['abstract'];
        this.article.key_title= l['data']['key_title'];
        this.article.active= l['data']['active'];
        this.article.detail= l['data']['detail'];
        this.article.keyword= l['data']['keyword'];
        this.article.image=l['data']['image'];
        this.article.date=l['data']['date'];
        this.article.author=l['data']['author'];
        this.article.time=l['data']['time'];
        this.article.alt_img=l['data']['alt_img'];
      },

      (error: any) => {
        console.log(error);
      }
    );
  }
  onSubmit(form: FormGroup) {
    const formData = new FormData();
    const formDataUploadfile = new FormData();

    if(this.uplodefile.length>0)
    {
    for (var i = 0; i < this.uplodefile.length; i++) {
      formDataUploadfile.append("image", this.uplodefile[i], this.fileName);
    }
    this.service.postUplodeFile(formDataUploadfile).subscribe(responseimg => {
      console.log(responseimg);
      if(responseimg.success=true)
      {
        formData.append("image",responseimg.data);
        this.service.postNews(form).subscribe(
          response => {
            console.log(response);

          },
          error => {
            console.log(error);
          }
        );
      }
      else{
        console.log('erooor')
      }

    },
    (error)=>{
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
