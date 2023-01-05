import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommuneService {

  constructor(private http:HttpClient) { }

  getInfos(): Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/infos');

  }
  getServices(){
    return this.http.get('http://127.0.0.1:8000/api/service');

  }
  findServicebyId(id: any): Observable<any>
  {
   return this.http.get('http://127.0.0.1:8000/api/service/' +id).pipe(map((res => res)));

  }
}
