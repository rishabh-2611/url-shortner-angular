import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { ChartsModule } from "ng2-charts";

// Bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Components
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { StatsComponent } from './stats/stats.component';

// Services
import { CommonService } from "./common.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    StatisticsComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
