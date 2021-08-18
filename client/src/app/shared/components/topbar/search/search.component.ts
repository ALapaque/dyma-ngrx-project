import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SetFilter, TryFetchPhotos } from '../../../../photos/shared/store/photos.actions';
import { State } from '../../../store';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.css' ]
})
export class SearchComponent implements OnInit {

  constructor(
    private store: Store<State>
  ) {
  }

  ngOnInit(): void {
  }

  applyFilter(value: string): void {
    this.store.dispatch(new SetFilter(value));
    this.store.dispatch(new TryFetchPhotos());
  }
}
