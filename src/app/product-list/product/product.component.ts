import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
  productlist: string[] = [];
  constructor() {
    for (var i = 0; i < 16; i++) {
      this.productlist[i] = "aaa";
    }
  }

  ngOnInit() {}
}
