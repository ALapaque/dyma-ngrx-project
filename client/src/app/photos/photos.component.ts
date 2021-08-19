import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgxGalleryImage, NgxGalleryOptions } from '@nomadreservations/ngx-gallery';
import { Observable } from 'rxjs';
import { State } from '../shared/store';
import { TryFetchRandomPhotos } from './shared/store/photos.actions';
import { photosSelector } from './shared/store/photos.selectors';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: [ './photos.component.css' ]
})
export class PhotosComponent implements OnInit {
  public photos$: Observable<Array<NgxGalleryImage>>;
  public galleryOptions: Array<NgxGalleryOptions> = [
    {
      previewFullscreen: true,
      previewCloseOnClick: true,
      previewCloseOnEsc: true,
      thumbnailsSwipe: true,
      thumbnailsColumns: 8,
      thumbnailsArrows: true,
      imageSwipe: true,
      previewArrows: true,
      previewAnimation: true,
      previewSwipe: true,
      previewKeyboardNavigation: true
    },
    {
      breakpoint: 800,
      thumbnailsColumns: 5
    },
    {
      breakpoint: 500,
      thumbnailsColumns: 4
    }
  ];

  constructor(
    private store: Store<State>
  ) {
    this.store.dispatch(new TryFetchRandomPhotos());
  }

  ngOnInit(): void {
    this.photos$ = this.store.select(photosSelector);
  }

}
