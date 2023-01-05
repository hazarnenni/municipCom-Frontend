import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AlbumService } from '../core/service/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  album : any;
  storageUrl = environment.storageUrl;
  constructor(private albumService: AlbumService ) { }

  ngOnInit(): void {
  this.show();
  }
show(){
  this.albumService.getPhoto().subscribe((data) => {
    console.log(data);
    this.album = data; },
    (error) => {
      console.log("error in the service");
    })
}
}
