// modules natifs
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// components
import { AppComponent } from './app.component';

// routing
import { APP_ROUTING } from './app.routing';
import { CoreModule } from './shared/modules/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTING, { relativeLinkResolution: 'legacy' }),
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
