import { Component, OnInit } from '@angular/core';
import { Register } from '../models/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  register: Register = new Register();

  constructor() {
    this.register.email = `virendra${Math.floor(
      Math.random() * 1000
    )}@gmail.com`;
    this.register.name = 'Virendra';
    this.register.password = '1234567890';
    this.register.password2 = '1234567890';
  }

  ngOnInit(): void {}

  submitForm() {
    console.log(this.register);
  }
}
