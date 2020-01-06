import { MatCheckboxModule } from "@angular/material/checkbox";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NavbarComponent } from "./navbar/navbar/navbar.component";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { ContentDahboardComponent } from "./content-dahboard/content-dahboard.component";
import { LayoutComponent } from "./layout/layout.component";
import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatRadioModule,
  MatDatepickerModule,
  MatTableModule
} from "@angular/material";
import { LayoutModule } from "@angular/cdk/layout";
import { MainsidebarComponent } from "./mainsidebar/mainsidebar.component";
import { MatSelectModule } from "@angular/material/select";
import { ChartsModule } from 'ng2-charts';
import {DpDatePickerModule} from 'ng2-jalali-date-picker';
@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    ContentDahboardComponent,
    LayoutComponent,

    MainsidebarComponent,


  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    DpDatePickerModule ,
    ChartsModule,
    MatTableModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatSelectModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatRadioModule
  ],
  exports: [NavbarComponent, SidebarComponent, ContentDahboardComponent]
})
export class DashboardModule {}
