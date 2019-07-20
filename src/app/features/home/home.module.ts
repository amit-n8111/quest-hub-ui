import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        FormsModule,
        HomeRoutingModule
    ]
})

export class HomeModule { }
