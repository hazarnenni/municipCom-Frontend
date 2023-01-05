import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http:HttpClient) { }

  getProjects(){
    return this.http.get('http://127.0.0.1:8000/api/projects');

  }
  findProjects(id: any): Observable<any>
  {
   return this.http.get('http://127.0.0.1:8000/api/projects/' +id).pipe(map((res => res)));

  }


}
