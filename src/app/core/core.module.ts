import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HelperService } from './services/helper.service';
import { EntitlementService } from './services/entitlement.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    HelperService,
    EntitlementService
  ],
  exports: [
    HttpClientModule
  ]
})
export class CoreModule { }
