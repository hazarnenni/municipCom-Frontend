import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Folder } from '../core/models/folder.model';
import { FoldersService } from '../core/service/folders.service';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {
  upload: FormGroup;
  files: any;
  constructor(private folderService: FoldersService, FB: FormBuilder) {
    this.upload = FB.group({
      label:'',
      name:'',
      cin:'',
      files:'',
      details:'',

    });
  }

  ngOnInit(): void {
    this.onChange(event);
  }

  onChange(event: any) {
    this.files = event.target.files[0];

    console.log(this.files);
    // for (let i = 0; i < this.files.length; i++) {
    //   this.onSubmit(i, this.files[i]);}
}
  onSubmit(upload:any){
    //console.log(voteproject.value)
    this.folderService.insertData(upload.value).subscribe((data)=>{
      console.log(data);
    })
}
}
