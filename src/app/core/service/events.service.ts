import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Events } from '../models/events.model';




@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private _url: string ='http://127.0.0.1:8000/api/events';
  private _url1: string ='http://127.0.0.1:8000/api/events/{id}';


  constructor(private http:HttpClient) { }
  getEvents(): Observable<any>{
    return this.http.get(this._url);

  }

  findEvent(id: any): Observable<any>
  {
   return this.http.get('http://127.0.0.1:8000/api/events/' +id).pipe(map((res => res)));

  }
}
