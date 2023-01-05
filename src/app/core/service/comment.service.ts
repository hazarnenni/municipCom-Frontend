import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Comment, CreateCommentRequest } from '../models';

@Injectable()
export class CommentService {
  constructor(private httpClient: HttpClient) {}

  public save(request: CreateCommentRequest): Observable<boolean> {
    return this.httpClient
      .post<void>(`${environment.baseUrl}/comments`, request)
      .pipe(map(() => true));
  }
}
