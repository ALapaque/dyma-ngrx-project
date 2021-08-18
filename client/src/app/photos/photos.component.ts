import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from '../shared/store';
import { Photo } from './shared/models/photo.model';
import { photosSelector } from './shared/store/photos.selectors';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: [ './photos.component.css' ]
})
export class PhotosComponent implements OnInit {
  public photos$: Observable<Array<Photo>>;

  constructor(
    private store: Store<State>
  ) {
  }

  ngOnInit(): void {
    this.photos$ = this.store.select(photosSelector);
  }

}
