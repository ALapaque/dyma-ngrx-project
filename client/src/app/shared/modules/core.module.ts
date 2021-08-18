import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SigninComponent } from '../../components/signin/signin.component';
import { SignupComponent } from '../../components/signup/signup.component';
import { ButtonsComponent } from '../components/topbar/buttons/buttons.component';
import { LogoComponent } from '../components/topbar/logo/logo.component';
import { SearchComponent } from '../components/topbar/search/search.component';
import { TopbarComponent } from '../components/topbar/topbar.component';
import { AuthGuard } from '../guards/auth.guard';
import { AuthInterceptor } from '../interceptors/auth.interceptor';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { LayoutModule } from './layout.module';

const COMPONENTS = [
  SignupComponent,
  SigninComponent,
  TopbarComponent,
  LogoComponent,
  ButtonsComponent,
  SearchComponent,
];

const PROVIDERS = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
  AuthService,
  UserService,
  AuthGuard,
];

const MODULES = [
  HttpClientModule,
  LayoutModule,
  ReactiveFormsModule,
  RouterModule,
];

@NgModule({
  declarations: COMPONENTS,
  imports: MODULES,
  providers: PROVIDERS,
  exports: COMPONENTS
})
export class CoreModule {
}
