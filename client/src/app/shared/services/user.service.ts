import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '../models/user.model';
import { tap, switchMap } from 'rxjs/operators';

@Injectable()
export class UserService {
  private baserUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  public getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.baserUrl}/api/user/current`);
  }

}
