import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilesRoutingModule } from './profiles-routing.module';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { EducationFormComponent } from './education-form/education-form.component';
import { ExperienceFormComponent } from './experience-form/experience-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileCrudService } from './services/profile-crud.service';
import { httpInterceptorProviders } from '../core/interceptors';

@NgModule({
  declarations: [
    ProfileFormComponent,
    EducationFormComponent,
    ExperienceFormComponent,
  ],
  providers: [ProfileCrudService, httpInterceptorProviders],
  imports: [CommonModule, ProfilesRoutingModule, FormsModule, HttpClientModule],
})
export class ProfilesModule {}
