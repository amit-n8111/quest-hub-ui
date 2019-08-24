import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { GrowlModule } from 'primeng/growl';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { MessageService } from 'primeng/components/common/messageservice';

import { NgxSpinnerModule } from 'ngx-spinner';

import { AuthGuard } from './services/auth.guard';
import { HelperService } from './services/helper.service';
import { RefDataService } from './services/ref-data.service';
import { EntitlementService } from './services/entitlement.service';
import { SocketService } from './services/socket.service';
import { GrowlService } from './services/growl.service';
import { LoaderService } from './services/loader.service';
import { NotificationService } from './services/notification.service';

import { LoaderComponent } from './components/loader/loader.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { StripHtmlPipe } from './pipes/strip-html.pipe';

@NgModule({
  declarations: [
    NavBarComponent,
    LoaderComponent,
    StripHtmlPipe
  ],
  imports: [
    GrowlModule,
    OverlayPanelModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [
    AuthGuard,
    HelperService,
    EntitlementService,
    SocketService,
    GrowlService,
    MessageService,
    LoaderService,
    RefDataService,
    NotificationService
  ],
  exports: [
    GrowlModule,
    NgxSpinnerModule,
    OverlayPanelModule,
    NavBarComponent,
    LoaderComponent,
    StripHtmlPipe
  ]
})

export class CoreModule {
}
