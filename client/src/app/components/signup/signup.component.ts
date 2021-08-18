import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/models/user.model';
import { Router } from '@angular/router';
import { State } from '../../shared/store';
import { TrySignup } from '../../shared/store/actions/auth.actions';
import { authErrorSelector } from '../../shared/store/selectors/auth.selectors';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: [ './signup.component.css' ]
})
export class SignupComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    email: new FormControl('', [ Validators.required, Validators.email ]),
    name: new FormControl('', [ Validators.required ]),
    password: new FormControl('', [ Validators.required ])
  });
  public error$: Observable<string>;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private store: Store<State>
  ) {
  }

  ngOnInit() {
    this.error$ = this.store.select(authErrorSelector);
  }

  public submit(): void {
    this.store.dispatch(new TrySignup(this.form.value));
  }

}
