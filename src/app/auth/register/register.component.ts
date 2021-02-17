import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/models/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  register: Register = new Register();
  constructor() {
    this.register.email = 'patelvirendra62@gmail.com';
  }

  ngOnInit(): void {}
}
