import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PhotosState } from './photos.reducers';

export const photosFeatureSelector = createFeatureSelector('photos');
export const photosFilterSelector = createSelector(
  photosFeatureSelector,
  (photoState: PhotosState) => photoState?.filter ?? null
);
export const photosSelector = createSelector(
  photosFeatureSelector,
  (photoState: PhotosState) => photoState?.photos ?? null
);
