import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { NgxGalleryImage } from '@nomadreservations/ngx-gallery';
import { EMPTY } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap, take } from 'rxjs/operators';
import { State } from '../../../shared/store';
import { PhotosService } from '../services/photos.service';
import PHOTOS_ACTIONS, { FetchPhotosSuccess, TryFetchRandomPhotos } from './photos.actions';
import { photosFilterSelector } from './photos.selectors';

@Injectable()
export class PhotosEffects {
  public fetchRandomPhotos$ = createEffect(() => (
    this.actions$.pipe(
      ofType(PHOTOS_ACTIONS.TRY_FETCH_RANDOM_PHOTOS),
      switchMap(() => this.photosService.getRandomPhotos()),
      map((photos: Array<NgxGalleryImage>) => new FetchPhotosSuccess(photos))
    )
  ));

  public fetchPhotos$ = createEffect(() => (
    this.actions$.pipe(
      ofType(PHOTOS_ACTIONS.TRY_FETCH_PHOTOS),
      distinctUntilChanged(),
      debounceTime(1000),
      switchMap(() => this.store.pipe(select(photosFilterSelector), take(1))),
      switchMap((filter: string) => {
        if (filter) {
          return this.photosService.getFilteredPhotos(filter);
        } else {
          this.store.dispatch(new TryFetchRandomPhotos());
          return EMPTY;
        }
      }),
      map((photos: Array<NgxGalleryImage>) => photos ? new FetchPhotosSuccess(photos) : null)
    )
  ));

  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private photosService: PhotosService
  ) {
  }
}
