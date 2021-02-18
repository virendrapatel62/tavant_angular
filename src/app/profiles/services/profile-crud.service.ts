import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfileFormData } from '../models/profile-form-data';

@Injectable({
  providedIn: 'root',
})
export class ProfileCrudService {
  constructor(private http: HttpClient) {}

  createProfile(profileData: ProfileFormData) {
    return this.http.post('/api/profile', profileData);
  }
}
p;
