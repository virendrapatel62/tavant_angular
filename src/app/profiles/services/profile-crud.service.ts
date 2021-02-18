import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Education,
  Experience,
  ProfileFormData,
} from '../models/profile-form-data';

@Injectable({
  providedIn: 'root',
})
export class ProfileCrudService {
  constructor(private http: HttpClient) {}

  createProfile(profileData: ProfileFormData) {
    return this.http.post('/api/profile', profileData);
  }

  addEducation(education: Education) {
    return this.http.put('/api/profile/education', education);
  }

  addExperience(experience: Experience) {
    return this.http.put('/api/profile/experience', experience);
  }
}
