import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ChartTestComponent } from './chart-test/chart-test.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {ChartTestService} from "./chart-test/chart-test.service";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ChartTestComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [ChartTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
