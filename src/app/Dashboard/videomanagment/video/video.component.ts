import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MytamwebserviceService } from './../../../services/mytamwebservice.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit  {
  public imagePath;
  imgURL: any;
  public message: string;
  resultSuccess:boolean=false;
  uplodefile: string;
  fileName:string;

  myForm: FormGroup;
  constructor(
    private service: MytamwebserviceService,
    private  fb: FormBuilder
  ) {

  }

  ngOnInit() {
    this.myForm = this.fb.group({
      title: ['', Validators.required],

      keyword: ['', Validators.required],

    });
  }
  get title() {
    return this.myForm.get("title");
  }


  get keyword() {
    return this.myForm.get("keyword");
  }

  onSubmit(form: FormGroup) {
    const formDataUploadfile = new FormData();
    console.log(this.uplodefile.length);
    if(this.uplodefile.length>0)
    {
    for (var i = 0; i < this.uplodefile.length; i++) {
      formDataUploadfile.append("video", this.uplodefile[i], this.fileName);
    }
    this.service.postUplodeFileVideo(formDataUploadfile).subscribe(responseimg => {
      console.log(responseimg);
      if(responseimg.success=true)
      {

       form.value.video=responseimg.data.path;
       console.log(form);
        this.service.postVideo(form.value).subscribe(
          response => {
           this.resultSuccess=true;
           setTimeout(()=>{
             this.resultSuccess=false;
           },5000);

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
