import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ProfileAboutComponent } from './profile-about/profile-about.component';
import { ProfileEducationComponent } from './profile-education/profile-education.component';
import { ProfileExperienceComponent } from './profile-experience/profile-experience.component';
import { ProfileGithubComponent } from './profile-github/profile-github.component';
import { ProfileTopComponent } from './profile-top/profile-top.component';


@NgModule({
  declarations: [ProfileComponent, ProfileAboutComponent, ProfileEducationComponent, ProfileExperienceComponent, ProfileGithubComponent, ProfileTopComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
