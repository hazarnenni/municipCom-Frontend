import { Component, OnInit } from '@angular/core';
import { Contact } from '../core/models/contact.model';
import { ContactService } from '../core/service/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts:any;
  contact=new Contact;
  constructor(private contactService:ContactService){}

  ngOnInit(): void {
    this.insertData();
  }

  getContactData(){
    console.log('contacts');
    this.contactService.getData().subscribe(res =>{
      console.log(res);
      this.contacts = res;
    })
}
  insertData(){
    console.log('this.contact',this.contact)
    this.contactService.insertData(this.contact).subscribe(res =>{
    console.log(res);
});


  }


}
