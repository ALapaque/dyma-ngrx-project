import { Action } from '@ngrx/store';
import { Photo } from '../models/photo.model';

const enum PHOTOS_ACTIONS {
  SET_FILTER = '[photos] set filter',
  TRY_FETCH_PHOTOS = '[photos] try fetch photos',
  FETCH_PHOTOS_SUCCESS = '[photos] fetch photos success'
}

export class SetFilter implements Action {
  readonly type: PHOTOS_ACTIONS = PHOTOS_ACTIONS.SET_FILTER;

  constructor(public payload: string) {
  }
}

export class TryFetchPhotos implements Action {
  readonly type: PHOTOS_ACTIONS = PHOTOS_ACTIONS.TRY_FETCH_PHOTOS;

  constructor(public payload?: any) {
  }
}

export class FetchPhotosSuccess implements Action {
  readonly type: PHOTOS_ACTIONS = PHOTOS_ACTIONS.FETCH_PHOTOS_SUCCESS;

  constructor(public payload: Array<Photo>) {
  }
}

export type PhotoActions = SetFilter | TryFetchPhotos | FetchPhotosSuccess;

export default PHOTOS_ACTIONS;
