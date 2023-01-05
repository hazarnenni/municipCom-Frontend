import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor( private httpClient:HttpClient) {}
  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/contacts');

  }

  insertData(data:Contact){
    return this.httpClient.post('http://127.0.0.1:8000/api/addcontact',data);
  }
}
