import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { EntitlementService } from './services/entitlement.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    EntitlementService
  ],
  exports: [
    HttpClientModule
  ]
})
export class CoreModule { }
