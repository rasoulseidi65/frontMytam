import { MytamwebserviceService } from 'src/app/services/mytamwebservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
interface newsList{
  title:string,
  abstract: string,
  detail: string,
  keyword: string,
  key_title: string,
  active: string,
  group_name: string,
}
@Component({
  selector: 'app-listnews',
  templateUrl: './listnews.component.html',
  styleUrls: ['./listnews.component.scss']
})
export class ListnewsComponent implements OnInit {
 data:string[]=[];
 id;
  constructor(  private service: MytamwebserviceService) {
    this. readNews();
   }
  readNews(){
    this.service.fetchloadNews().subscribe(
      (response)=>{
        var listNews=response.valueOf()['data'];
        console.log( listNews);
        this.data=listNews;
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
  ngDelete(){
   this.service.deleteNewsID(this.id).subscribe(
     (response)=>{
       console.log(response);
     }
   )

  }
  ngOnInit() {

  }

}
