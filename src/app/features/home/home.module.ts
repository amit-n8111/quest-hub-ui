import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// ToDo:: If more primeng packages are required import shared module.
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CarouselModule } from 'primeng/carousel';

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
        AutoCompleteModule,
        CarouselModule
    ],
    providers: [
        HomeService
    ]
})

export class HomeModule { }
