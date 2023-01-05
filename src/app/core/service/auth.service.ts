import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


const AUTH_API = 'http://127.0.0.1:8000/api';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  login(email: any, password: any): Observable<any> {
    return this.httpClient.post(AUTH_API + '/login', {
      email,
      password
    }, httpOptions);
  }

register(body: any):Observable<any> {
  console.log(body)
    return this.httpClient.post(AUTH_API + '/register', body, httpOptions);
  }

  isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
}
