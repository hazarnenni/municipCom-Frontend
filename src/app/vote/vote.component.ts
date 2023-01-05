import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Vote } from '../core/models/vote.model';
import { VoteService } from '../core/service/vote.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

voteproject: FormGroup;

  constructor(private voteService: VoteService, private FB: FormBuilder) {

    this.voteproject = FB.group({
      email:'',
      cin:'',
      voting:'',
      reason:'',

    });
   }

  ngOnInit(): void {
    // this.addVote();
  }


  send(voteproject:any){
      //console.log(voteproject.value)
      this.voteService.Vote(voteproject.value).subscribe((data)=>{
        console.log(data);
      })
  }
//  addVote(){
//    console.log('this.vote',this.vote)
//    this.voteService.Vote(this.vote).subscribe(res =>{
//    console.log(res);
//  });


// }
// getProject(){
//   this.voteService.getProjects().subscribe(res =>{
//   console.log(res);
//   this.project = res;
//  });
// }

 }
