import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  brandName = 'Dev-Connector';
  status: boolean = false;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.authSubject.subscribe({
      next: (data) => {
        console.log(data);
        if (data == 'login') {
          this.status = true;
        }
      },
      error: (err) => {
        console.log({ err });
      },
    });

    setTimeout(() => {
      this.authService.authSubject.next({ action: 'login' });
    }, 5000);
  }
}
