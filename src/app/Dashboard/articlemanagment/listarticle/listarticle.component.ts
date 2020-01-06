import { MytamwebserviceService } from 'src/app/services/mytamwebservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listarticle',
  templateUrl: './listarticle.component.html',
  styleUrls: ['./listarticle.component.scss']
})
export class ListarticleComponent implements OnInit {
  data:string[]=[];
  id;
  constructor(private service: MytamwebserviceService) {
    this.readArticle();
  }
  readArticle(){
    this.service.getArticle().subscribe(
      (response)=>{
        var listArticle=response.valueOf()['data'];
        this.data=listArticle;
        // var newsCount=listNews['items'].length;
        // for(var i=0;i<=newsCount;i++){
        //   this.data[i]=listNews['items'];
          // console.log(response);
        // }
      }
    )
  }
  readID(id:any){
 this.id=id;
  }
  ngDelete(){
   this.service.deleteArticleID(this.id).subscribe(
     (response)=>{
       console.log(response);
     }
   )

  }
  ngOnInit() {

  }

}
