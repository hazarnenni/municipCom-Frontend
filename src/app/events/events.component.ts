import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { EventsService } from '../core/service/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: any;
  id: any;
  storageUrl = environment.storageUrl;
  constructor(private eventsService: EventsService , private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];

  }

  ngOnInit(): void {
    console.log('events')
    this.eventsService.getEvents().subscribe((data) => {
      console.log(data);
      this.events = data; },
      (error) => {
        console.log("error in the service");
      })
  }

  // getbyid(id: any){
  //   this.eventsService.findEvent(this.id).subscribe(data => {
  //     this.events = data;
  // });
  //}
}
