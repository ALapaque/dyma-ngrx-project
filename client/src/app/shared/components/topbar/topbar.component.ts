import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from '../../store';
import { Logout } from '../../store/actions/auth.actions';
import { authIsLoggedInSelector } from '../../store/selectors/auth.selectors';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: [ './topbar.component.css' ]
})
export class TopbarComponent implements OnInit {
  public isLoggedIn$: Observable<boolean>;

  constructor(private store: Store<State>) {
  }

  ngOnInit() {
    this.isLoggedIn$ = this.store.select(authIsLoggedInSelector);
  }
}
