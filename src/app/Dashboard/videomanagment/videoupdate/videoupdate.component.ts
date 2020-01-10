import { ActivatedRoute } from '@angular/router';
import { MytamwebserviceService } from './../../../services/mytamwebservice.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-videoupdate',
  templateUrl: './videoupdate.component.html',
  styleUrls: ['./videoupdate.component.scss']
})
export class VideoupdateComponent implements OnInit {
  @Input() id:String;
  videos={
    title:'',
    video:'',
    keyword:''
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
    private route:ActivatedRoute
  ) {
    this.route.paramMap.subscribe(params => (this.id = params.get("id")));
    this.readVideo();

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
  readVideo() {
    this.service.getVideoID(this.id).subscribe(
      (data) => {
        console.log(data);
        var l=data;
        this.videos.title= l['data']['title'];
        this.videos.keyword= l['data']['keyword'];
        this.videos.video= l['data']['video'];

      },

      (error: any) => {
        console.log(error);
      }
    );
  }
  onSubmit(form: FormGroup) {

    const formDataUploadfile = new FormData();

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
        this.service.updateVideo(this.id,form.value).subscribe(
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
