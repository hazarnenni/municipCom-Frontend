import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewsService } from '../core/service/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: any;
  storageUrl = environment.storageUrl;
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    console.log('News');
    this.newsService.getNews().subscribe(res =>{
      console.log(res);
      this.news = res;
});
  }

}
