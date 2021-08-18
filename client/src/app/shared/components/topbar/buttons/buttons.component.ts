import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from '../../../store';
import { Logout } from '../../../store/actions/auth.actions';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: [ './buttons.component.css' ]
})
export class ButtonsComponent implements OnInit {

  @Input() isLoggedIn: boolean;

  constructor(
    private store: Store<State>
  ) {
  }

  ngOnInit(): void {
  }

  public logout(): void {
    this.store.dispatch(new Logout());
  }

}
