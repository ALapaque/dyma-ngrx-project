import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgxGalleryModule } from '@nomadreservations/ngx-gallery';
import { LayoutModule } from '../shared/modules/layout.module';
import { PhotosService } from './shared/services/photos.service';
import { PhotosComponent } from './photos.component';
import { PHOTOS_ROUTES } from './photos.routing';
import { PhotosEffects } from './shared/store/photos.effects';
import { photoReducer } from './shared/store/photos.reducers';

const COMPONENTS = [
  PhotosComponent
];

const MODULES = [
  LayoutModule,
  NgxGalleryModule,
  RouterModule.forChild(PHOTOS_ROUTES),
  StoreModule.forFeature('photos', photoReducer),
  EffectsModule.forFeature([ PhotosEffects ])
];

const PROVIDERS = [
  PhotosService
];

@NgModule({
  declarations: COMPONENTS,
  imports: MODULES,
  providers: PROVIDERS
})
export class PhotosModule {
}
