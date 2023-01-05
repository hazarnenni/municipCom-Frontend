import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Folder} from '../models/folder.model';


@Injectable({
  providedIn: 'root'
})
export class FoldersService {

  constructor(private httpClient:HttpClient) { }


  insertData(data:Folder){
    return this.httpClient.post('http://127.0.0.1:8000/api/addfolder',data);
  }
}
