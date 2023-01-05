import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommuneService } from '../core/service/commune.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  service: any;
  storageUrl = environment.storageUrl;
  constructor(private communeService: CommuneService) { }

  ngOnInit(): void {
    this.show();
  }
  show(){
    this.communeService.getServices().subscribe((data) => {
      console.log(data);
      this.service = data; },
      (error) => {
        console.log("error in the service");
      })
  }
}
