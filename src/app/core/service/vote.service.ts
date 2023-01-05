import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vote } from '../models/vote.model';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private httpClient: HttpClient) { }


  getProjects(){
    return this.httpClient.get('http://127.0.0.1:8000/api/projects');

  }
  Vote(data:Vote){
    return this.httpClient.post('http://127.0.0.1:8000/api/addvote', data);

  }
}
