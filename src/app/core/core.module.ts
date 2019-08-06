import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { OverlayPanelModule } from 'primeng/overlaypanel';

import { AuthGuard } from './services/auth.guard';
import { HelperService } from './services/helper.service';
import { EntitlementService } from './services/entitlement.service';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    OverlayPanelModule
  ],
  providers: [
    AuthGuard,
    HelperService,
    EntitlementService
  ],
  exports: [
    NavBarComponent,
    OverlayPanelModule
  ]
})

export class CoreModule { }
