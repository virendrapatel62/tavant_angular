import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardActionsComponent } from './dashboard-actions/dashboard-actions.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';


@NgModule({
  declarations: [DashboardComponent, DashboardActionsComponent, EducationComponent, ExperienceComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
