import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LayoutRoutingModule } from './layout-routing.module';
import { CarouselComponent } from './carousel/carousel.component';
import {TopsellingComponent} from '../topselling/topselling.component';
import {SpecialbrandsComponent} from '../specialbrands/specialbrands.component';
import { MainbodyComponent } from './mainbody/mainbody.component';
import { MethodsYouComponent } from './methods-you/methods-you.component';
import { ProjectComponent } from './project/project.component';
import { VideosComponent } from './videos/videos.component';
import { NewsComponent } from './news/news.component';
import { HamkaranComponent } from './hamkaran/hamkaran.component';
import { WhyUsComponent } from './why-us/why-us.component';
import {NgxUsefulSwiperModule} from "ngx-useful-swiper";
import { MoreLearnComponent } from './more-learn/more-learn.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatListModule} from "@angular/material/list";
import {MatVideoModule} from "mat-video";
import { SpanserComponent } from './spanser/spanser.component';

@NgModule({
  declarations: [IndexComponent, CarouselComponent, TopsellingComponent,
    TopmenuComponent,
  SpecialbrandsComponent,
  MainbodyComponent,
  MethodsYouComponent,
  ProjectComponent,
  VideosComponent,
  NewsComponent,
  HamkaranComponent,
  WhyUsComponent,
HeaderComponent,
FooterComponent,
  MoreLearnComponent,
  SpanserComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUsefulSwiperModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatVideoModule

  ],
  exports:[IndexComponent, CarouselComponent,TopsellingComponent,HeaderComponent,
    SpecialbrandsComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
})
export class LayoutModule { }
