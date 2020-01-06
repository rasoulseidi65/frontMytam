import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatrialModule } from "./shared/matrial.module";
import { FormsModule } from "@angular/forms";
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgScrolltopModule } from 'ng-scrolltop';
@NgModule({
  declarations: [AppComponent,],
  imports: [
    NgScrolltopModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatrialModule,
    NgxSpinnerModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
