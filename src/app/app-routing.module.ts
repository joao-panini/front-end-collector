import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ChartTestComponent} from "./chart-test/chart-test.component";

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'chart-test',component: ChartTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
