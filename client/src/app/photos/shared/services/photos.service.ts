import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
import { map, tap } from 'rxjs/operators';
import { createApi } from 'unsplash-js';
import { ApiResponse } from 'unsplash-js/dist/helpers/response';
import { Basic } from 'unsplash-js/dist/methods/photos/types';
import { Photos } from 'unsplash-js/dist/methods/search/types/response';
import { environment } from '../../../../environments/environment';
import { Photo } from '../models/photo.model';

@Injectable()
export class PhotosService {
  private API = createApi({
    accessKey: environment.UNSPLASH_ACCESS_KEY
  });

  constructor() {
  }

  public getPhotos(filter: string): Observable<Array<Photo>> {
    return fromPromise(
      this.API.search.getPhotos({
        query: filter,
        page: 0,
        perPage: 1000
      }).then((res: ApiResponse<Photos>) => res.response.results)
    ).pipe(
      tap(console.log),
      map((photos: Array<Basic>) => (photos.map((photo: Basic) => ({ url: photo.urls.small }))))
    );
  }
}
