import { NgModule } from '@angular/core';
import { PostersComponent } from './posters.component';
import { PostersRoutingModule } from './posters-routing.module';

@NgModule({
  declarations: [PostersComponent],
  imports: [
    PostersRoutingModule
  ]
})

export class PostersModule { }
