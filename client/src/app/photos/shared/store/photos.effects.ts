import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { debounceTime, map, switchMap, take, tap } from 'rxjs/operators';
import { State } from '../../../shared/store';
import { Photo } from '../models/photo.model';
import { PhotosService } from '../services/photos.service';
import PHOTOS_ACTIONS, { FetchPhotosSuccess } from './photos.actions';
import { photosFilterSelector } from './photos.selectors';

@Injectable()
export class PhotosEffects {
  public fetchPhotos$ = createEffect(() => (
    this.actions$.pipe(
      ofType(PHOTOS_ACTIONS.TRY_FETCH_PHOTOS),
      debounceTime(1000),
      switchMap(() => this.store.pipe(select(photosFilterSelector), take(1))),
      switchMap((filter: string) => this.photosService.getPhotos(filter)),
      map((photos: Array<Photo>) => new FetchPhotosSuccess(photos))
    )
  ));

  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private photosService: PhotosService
  ) {
  }
}
