import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeOverviewComponent } from './components/home-overview/home-overview.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: HomeComponent
            }
            // ,
            // {
            //     path: 'overview',
            //     component: HomeOverviewComponent
            // }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class HomeRoutingModule { }
