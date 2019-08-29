import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module.tns';

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        NativeScriptRouterModule,
        LoginRoutingModule
    ],
    declarations: [LoginComponent]
})
export class LoginModule {

}
