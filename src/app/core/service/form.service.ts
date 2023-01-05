import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { Form } from './../models/form.model';
import { environment } from 'src/environments/environment';
import { Option } from '../models/option.model';

@Injectable()
export class FormService {
  constructor(private httpClient: HttpClient) {}

  public find(id?: number): Observable<Form> {
    return this.httpClient
      .get<Form>(`${environment.server}/forms/${id}/details`)
      .pipe(map((form) => this.mapForm(form)));
  }

  public create(form: Form): Observable<boolean> {
    return this.httpClient
      .post(`${environment.server}/forms`, form)
      .pipe(map(() => true));
  }

  public save(form: Form): Observable<boolean> {
    return this.httpClient
      .post(`${environment.server}/forms/save`, form)
      .pipe(map(() => true));
  }

  public createResponse(id?: number, userId?: number): Observable<string> {
    return this.httpClient
      .post<{ responseId: string }>(`${environment.server}/responses/${id}`, {
        userId,
      })
      .pipe(map(({ responseId }) => responseId));
  }

  public saveResponse(options: Option[]): Observable<boolean> {
    return this.httpClient
      .put(`${environment.server}/responses`, { options })
      .pipe(map(() => true));
  }

  public deleteQuestion(id?: number): Observable<boolean> {
    return this.httpClient
      .delete(`${environment.server}/question/${id}`)
      .pipe(map(() => true));
  }

  private mapForm(form: Form): Form {
    form.createdAt = form.createdAt ? new Date(form.createdAt) : undefined;
    form.questions?.forEach((question) =>
      question.options?.forEach(
        (option) =>
          (option.subOptions = option.optionList
            ? option.optionList.split('__').map((name) => ({ name } as Option))
            : [])
      )
    );
    return form;
  }
}
