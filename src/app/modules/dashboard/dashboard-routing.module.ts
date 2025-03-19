// modules/dashboard/dashboard-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { StatsComponent } from './components/stats/stats.component';

const routes: Routes = [
  {
    path: '', component: DashboardHomeComponent,
    children: [
      { path: 'stats', component: StatsComponent },
      { path: '', redirectTo: 'stats', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }