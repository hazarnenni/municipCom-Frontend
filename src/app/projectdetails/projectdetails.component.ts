import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ProjectsService } from '../core/service/projects.service';


@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css']
})
export class ProjectdetailsComponent implements OnInit {
  project: any;
  vote: any;
  id: any;
  data:any;
  storageUrl = environment.storageUrl;
  constructor(private projectService: ProjectsService , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getdata();

  }
getdata(){
  this.projectService.findProjects(this.id).subscribe(data=> {
    this.data = data;
    console.log(this.data);
  })
}

getAllProjects(){
  this.projectService.getProjects().subscribe(res =>{
    console.log(res);
    this.project = res;
});

}

}
