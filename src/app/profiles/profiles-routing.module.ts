import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationFormComponent } from './education-form/education-form.component';
import { ExperienceFormComponent } from './experience-form/experience-form.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';

const routes: Routes = [
  {
    path: 'create-profile',
    component: ProfileFormComponent,
  },
  {
    path: 'edit-profile',
    component: ProfileFormComponent,
  },
  {
    path: 'add-experience',
    component: ExperienceFormComponent,
  },
  {
    path: 'add-education',
    component: EducationFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilesRoutingModule {}
