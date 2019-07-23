import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { HomeOverviewComponent } from './home-overview/home-overview.component';

@NgModule({
    declarations: [
        HomeComponent,
        HomeOverviewComponent
    ],
    imports: [
        FormsModule,
        HomeRoutingModule,
        RouterModule
    ]
})

export class HomeModule { }
