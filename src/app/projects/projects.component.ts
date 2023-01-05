import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProjectsService } from '../core/service/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  project: any;
  storageUrl = environment.storageUrl;
  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe(res =>{
      console.log(res);
      this.project = res;
});
  }

}
