import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  registerUser(data: any) {
    return this.http.post('/api/users', data);
  }

  loginUser(credentials: any) {
    return this.http.post('/api/auth', credentials);
  }
}
