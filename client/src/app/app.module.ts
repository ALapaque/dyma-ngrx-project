// modules natifs
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

// components
import { AppComponent } from './app.component';

// routing
import { APP_ROUTING } from './app.routing';
import { CoreModule } from './shared/modules/core.module';
import { reducers } from './shared/store';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTING, { relativeLinkResolution: 'legacy' }),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({
      name: 'ngrx-photo',
      logOnly: environment.production
    }),
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
