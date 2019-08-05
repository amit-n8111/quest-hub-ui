import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AutoCompleteModule } from 'primeng/autocomplete';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { HomeOverviewComponent } from './components/home-overview/home-overview.component';
import { HomeCarouselComponent } from './components/home-carousel/home-carousel.component';

import { HomeService } from './services/home.service';

@NgModule({
    declarations: [
        HomeComponent,
        HomeOverviewComponent,
        HomeCarouselComponent
    ],
    imports: [
        FormsModule,
        HomeRoutingModule,
        RouterModule,
        AutoCompleteModule
    ],
    providers: [
        HomeService
    ]
})

export class HomeModule { }
