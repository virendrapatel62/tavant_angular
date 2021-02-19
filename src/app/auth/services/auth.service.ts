import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authObservable: Subject<any>;

  public get authSubject() {
    return this.authObservable;
  }

  constructor(private http: HttpClient) {
    this.authObservable = new Subject();
  }

  registerUser(data: any) {
    return this.http.post('/api/users', data);
  }

  loginUser(credentials: any) {
    return this.http.post('/api/auth', credentials);
  }
  getUser() {
    return this.http.get('/api/auth');
  }
}
