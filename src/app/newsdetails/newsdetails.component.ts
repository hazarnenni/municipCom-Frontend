import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { NewsService } from '../core/service/news.service';

@Component({
  selector: 'app-newsdetails',
  templateUrl: './newsdetails.component.html',
  styleUrls: ['./newsdetails.component.css']
})
export class NewsdetailsComponent implements OnInit {
  news: any;
  id: any;
  data:any;
  storageUrl = environment.storageUrl;
  constructor(private newsService: NewsService , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getdata();
    this.getAllNews();
  }
  getdata(){
    this.newsService.findNews(this.id).subscribe(data=> {
      this.data = data;
      console.log(this.data);
    })
  }
  getAllNews(){
    this.newsService.getNews().subscribe(res =>{
      console.log(res);
      this.news = res;
});
  }
}
