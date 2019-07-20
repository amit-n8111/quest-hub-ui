import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HelperService } from './services/helper.service';
import { EntitlementService } from './services/entitlement.service';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [NavBarComponent],
  imports: [
    RouterModule,
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
