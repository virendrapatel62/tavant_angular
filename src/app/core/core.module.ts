import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LandingComponent } from './components/layout/landing/landing.component';
import { httpInterceptorProviders } from './interceptors';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, LandingComponent],
  imports: [CommonModule, CoreRoutingModule],
  exports: [NavbarComponent, FooterComponent, LandingComponent],
  providers: [],
})
export class CoreModule {}
