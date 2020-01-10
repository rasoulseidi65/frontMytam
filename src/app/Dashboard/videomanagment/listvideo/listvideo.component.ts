import { FormGroup } from '@angular/forms';
import { MytamwebserviceService } from './../../../services/mytamwebservice.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listvideo',
  templateUrl: './listvideo.component.html',
  styleUrls: ['./listvideo.component.scss']
})
export class ListvideoComponent implements OnInit {

  data:string[];
  id:string;
  public imagePath;
  imgURL: any;
  public message: string;
 uplodefile: string;
  fileName:string;

 myForm: FormGroup;
  constructor(private fb: FormBuilder , private service:MytamwebserviceService) {
    this.readVideos();
   }

  ngOnInit() {

    this.myForm = this.fb.group({
      video: ['', Validators.required],
      title: ['', Validators.required],
      keyword: ['', Validators.required],
    });
  }
  get video() {
    return this.myForm.get("video");
  }
  get title() {
    return this.myForm.get("title");
  }
  get keyword() {
    return this.myForm.get("keyword");
  }

  readVideos(){
    this.service.fetchloadVideo().subscribe(
      (response)=>{
        var listVideo=response.valueOf()['data'];
        console.log( listVideo);
        this.data=listVideo;
        // var newsCount=listNews['items'].length;
        // for(var i=0;i<=newsCount;i++){
        //   this.data[i]=listNews['items'];
          console.log(this.data[0]['title']);
        // }
      }
    )
  }
  readID(id:any){
 this.id=id;
  }
  onDelete(){
    this.service.deleteVideoID(this.id).subscribe(
      (response)=>{
        console.log(response);
        this.readVideos();
      }
    )
  }

}
