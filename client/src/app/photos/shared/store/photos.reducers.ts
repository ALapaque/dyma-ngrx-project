import { NgxGalleryImage } from '@nomadreservations/ngx-gallery';
import PHOTOS_ACTIONS, { PhotoActions } from './photos.actions';

export interface PhotosState {
  photos: Array<NgxGalleryImage>;
  filter: string;
}

export function photoReducer(state: PhotosState, action: PhotoActions): PhotosState {
  switch (action.type) {
    case PHOTOS_ACTIONS.SET_FILTER:
      return {
        ...state,
        filter: action.payload
      };
    case PHOTOS_ACTIONS.FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: action.payload
      };
    default:
      return state;
  }
}
