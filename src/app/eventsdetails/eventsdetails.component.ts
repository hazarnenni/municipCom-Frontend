import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Events } from '../core/models/events.model';
import { EventsService } from '../core/service/events.service';

@Component({
  selector: 'app-eventsdetails',
  templateUrl: './eventsdetails.component.html',
  styleUrls: ['./eventsdetails.component.css']
})
export class EventsdetailsComponent implements OnInit {

  events: any;
  id: any;
data:any;
  storageUrl = environment.storageUrl;
  constructor(private eventsService: EventsService , private route: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.getdata();
    this.otherEvent();
  }

  getdata(){
    this.eventsService.findEvent(this.id).subscribe(data=> {
      this.data = data;
      console.log(this.data);
    })

  }

otherEvent(){
  this.eventsService.getEvents().subscribe((data) => {
    console.log(data);
    this.events = data; },
    (error) => {
      console.log("error in the service");
    })
}

}
