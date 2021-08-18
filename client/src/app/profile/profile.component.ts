import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../shared/models/user.model';
import { Observable } from 'rxjs';
import { State } from '../shared/store';
import { TryFetchCurrentUser } from '../shared/store/actions/auth.actions';
import { authCurrentUserSelector } from '../shared/store/selectors/auth.selectors';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: [ './profile.component.css' ]
})
export class ProfileComponent implements OnInit {
  public currentUser$: Observable<User>;

  constructor(private store: Store<State>) {
    this.store.dispatch(new TryFetchCurrentUser());
  }

  ngOnInit() {
    this.currentUser$ = this.store.select(authCurrentUserSelector);
  }

}
