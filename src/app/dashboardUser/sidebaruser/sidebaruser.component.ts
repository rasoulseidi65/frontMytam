import { map } from 'rxjs/operators';
import { Breakpoints } from '@angular/cdk/layout';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebaruser',
  templateUrl: './sidebaruser.component.html',
  styleUrls: ['./sidebaruser.component.scss']
})
export class SidebaruserComponent   {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );

constructor(private breakpointObserver: BreakpointObserver) {}


}
