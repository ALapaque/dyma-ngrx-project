import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../shared/modules/layout.module';
import { ProfileComponent } from './profile.component';
import { PROFILES_ROUTES } from './profile.routing';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    LayoutModule,
    RouterModule.forChild(PROFILES_ROUTES),
  ]
})
export class ProfileModule {
}
