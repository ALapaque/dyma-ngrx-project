import { Injectable } from '@angular/core';
import { NgxGalleryImage } from '@nomadreservations/ngx-gallery';
import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
import { map, tap } from 'rxjs/operators';
import { createApi } from 'unsplash-js';
import { ApiResponse } from 'unsplash-js/dist/helpers/response';
import { Basic, Random } from 'unsplash-js/dist/methods/photos/types';
import { Photos } from 'unsplash-js/dist/methods/search/types/response';
import { environment } from '../../../../environments/environment';

@Injectable()
export class PhotosService {
  private unsplashAPI = createApi({
    accessKey: environment.UNSPLASH_ACCESS_KEY
  });

  constructor() {
  }

  public getRandomPhotos(): Observable<Array<NgxGalleryImage>> {
    return fromPromise(
      this.unsplashAPI.photos.getRandom({count: 24}).then((res: ApiResponse<Random>) => res.response)
    ).pipe(
      tap(console.log),
      map((photos: Array<Basic>) => (this.transformQueryResult(photos)))
    );
  }

  public getFilteredPhotos(filter: string): Observable<Array<NgxGalleryImage>> {
    return fromPromise(
      this.unsplashAPI.search.getPhotos({
        query: filter,
        page: 0,
        perPage: 24
      }).then((res: ApiResponse<Photos>) => res.response.results)
    ).pipe(
      tap(console.log),
      map((photos: Array<Basic>) => (this.transformQueryResult(photos)))
    );
  }

  private transformQueryResult(photos: Array<Basic>): Array<NgxGalleryImage> {
    return photos.map((photo: Basic) => ({
      small: photo.urls.small,
      medium: photo.urls.regular,
      big: photo.urls.full,
      url: photo.urls.regular,
      description: photo.alt_description,
      label: photo.description
    }));
  }
}
