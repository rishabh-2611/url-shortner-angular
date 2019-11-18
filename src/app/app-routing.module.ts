import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { StatsComponent } from './stats/stats.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: ":shortUrl",
    component: HomeComponent
  },
  {
    path: "statistics",
    component: StatisticsComponent
  },
  // {
  //   path: ":stats",
  //   component: StatsComponent
  // },
  {
    path: ":shortUrl/stats",
    component: StatsComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
