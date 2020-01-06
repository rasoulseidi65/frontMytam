import { Router } from "@angular/router";
import { Component, OnInit, ElementRef , ViewChild, HostListener} from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  @HostListener('window:scroll')
  title = "تام";
  which = 'window';
  showMenu: boolean = true;
  showMenu1: boolean = false;
  isShow: boolean;
  topPosToStartShowing = 100;

  constructor(private spinner: NgxSpinnerService, private router: Router) {
    // if (this.router.url != "/") {
    //   console.log(this.router.url);
    //   this.showMenu = false;
    //   this.showMenu1 = true;
    // }
  }



  checkScroll() {

    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }


  get isElement() { return this.which === 'element'; }

  get iconBottom() {
    return this.isElement ? '45px' : '12px';
  }

  get iconColor() {
    return this.isElement ? 'yellow' : '#333';
  }

  get iconFill() {
    return this.isElement ? 'red' : 'white';
  }

  get iconSize() {
    return this.isElement ? '60px' : '48px';
  }

  get iconSizeInner() {
    return this.isElement ? '32' : '24';
  }
  get elementId() {
    return this.isElement ? 'my-scrolling-element-id' : '';
  }


  ngOnInit() {
    // this.spinner.show();

    // setTimeout(() => {
    //   /** spinner ends after 5 seconds */
    //   this.spinner.hide();
    // }, 5000);
  }
}
