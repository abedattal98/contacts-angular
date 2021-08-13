import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from 'src/app/services/contact.service';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  id =null
  contact: Contact;

  constructor(private route: ActivatedRoute, private _list: ContactsService) {  }

  getContact(id:string) {
    return this._list.getContact(id).subscribe((data: any) => {
      console.log(this.contact=data)
    })
  }
  
  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id')
      console.log(this.id)
      this.getContact(this.id)
    ;
  }

}
