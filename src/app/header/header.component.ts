import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommuneService } from '../core/service/commune.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  infos: any;
  storageUrl = environment.storageUrl;

  constructor(private communeService: CommuneService) { }

  ngOnInit(): void {
    this.info();
  }

  info(): void{
    this.communeService.getInfos().subscribe((data) => {
      console.log(data);
      this.infos = data; },
      (error) => {
        console.log("error in the service");
      })
  }
}
