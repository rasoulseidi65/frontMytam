import { MytamwebserviceService } from 'src/app/services/mytamwebservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topselling',
  templateUrl: './topselling.component.html',
  styleUrls: ['./topselling.component.scss']
})
export class TopsellingComponent implements OnInit {
 dataProduct:String[]=[];
  constructor(private service:MytamwebserviceService) {
    this.readProduct();
   }

  ngOnInit() {
  }
  readProduct(){
    this.service.getProductHomePage().subscribe(
      (response)=>{
        var listProduct=response['data'];
        this.dataProduct=listProduct;
        console.log(listProduct['0']);
      }
    )
  }

}
