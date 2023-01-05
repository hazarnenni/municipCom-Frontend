import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HistoryService } from '../core/service/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  history:any
  storageUrl = environment.storageUrl;

  constructor(private historyService:HistoryService){}

  ngOnInit(): void {
    console.log('history')
    this.historyService.getData().subscribe((data) => {
      console.log(data);
      this.history = data; },
      (error) => {
        console.log("error in the service");
      })
  }


}
