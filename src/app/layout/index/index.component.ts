import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  showMenu:boolean=true;
  constructor(private router:Router) {
    // if (this.router.url != "/") {
      console.log(this.router.url);
      // this.showMenu = false;
    // }
  }

  ngOnInit() {
  }

}
