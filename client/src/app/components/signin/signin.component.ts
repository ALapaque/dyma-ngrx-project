import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';
import { State } from '../../shared/store';
import { TrySignin } from '../../shared/store/actions/auth.actions';
import { authErrorSelector } from '../../shared/store/selectors/auth.selectors';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: [ './signin.component.css' ]
})
export class SigninComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    email: new FormControl('', [ Validators.required, Validators.email ]),
    password: new FormControl('', [ Validators.required ])
  });
  public error$: Observable<string>;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private store: Store<State>
  ) {
  }

  ngOnInit() {
    this.error$ = this.store.select(authErrorSelector);
  }

  public submit(): void {
    this.store.dispatch(new TrySignin(this.form.value));
  }
}
