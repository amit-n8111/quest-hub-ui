import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HelperService } from './services/helper.service';
import { EntitlementService } from './services/entitlement.service';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    HelperService,
    EntitlementService
  ],
  exports: [
    NavBarComponent
  ]
})
export class CoreModule { }
