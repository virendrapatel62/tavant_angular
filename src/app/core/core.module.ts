import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LandingComponent } from './components/layout/landing/landing.component';
import { httpInterceptorProviders } from './interceptors';
import { AlertComponent } from './components/alert/alert.component';
import { AlertService } from './services/alert.service';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    AlertComponent,
  ],
  imports: [CommonModule, CoreRoutingModule],
  exports: [NavbarComponent, FooterComponent, LandingComponent, AlertComponent],
  providers: [AlertService, httpInterceptorProviders],
})
export class CoreModule {}
