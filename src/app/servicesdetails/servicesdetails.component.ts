import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CommuneService } from '../core/service/commune.service';

@Component({
  selector: 'app-servicesdetails',
  templateUrl: './servicesdetails.component.html',
  styleUrls: ['./servicesdetails.component.css']
})
export class ServicesdetailsComponent implements OnInit {
  service: any;
  id: any;
  data:any;
  storageUrl = environment.storageUrl;
  constructor(private communeService : CommuneService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getService();
    this.filtrage();
  }

  getService(){
    this.communeService.findServicebyId(this.id).subscribe(data=> {
      this.data = data;
      console.log(this.data);
    })
  }

  filtrage(){
    this.communeService.getServices().subscribe((data) => {
      console.log(data);
      this.service = data; },
      (error) => {
        console.log("error in the service");
      })
  }
}
