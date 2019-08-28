import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptRouterModule, NSModuleFactoryLoader } from 'nativescript-angular/router';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module.tns';

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        NativeScriptRouterModule,
        LoginRoutingModule,
        NativeScriptCommonModule,
    ],
    declarations: [LoginComponent],
    providers: [
        { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader }
    ]
})
export class LoginModule {

}
