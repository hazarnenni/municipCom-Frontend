import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }
  getNews(){
    return this.http.get('http://127.0.0.1:8000/api/news');

  }
  findNews(id: any): Observable<any>
  {
   return this.http.get('http://127.0.0.1:8000/api/news/' +id).pipe(map((res => res)));

  }
}
