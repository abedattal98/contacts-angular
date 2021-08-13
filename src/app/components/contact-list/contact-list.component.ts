import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ContactsService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit {
  Contacts: Contact[];
  id: string
  constructor(private _list: ContactsService, private route: Router) { }

  getContactsData() {
    return this._list.getContacts()
      .subscribe((data: any) => { this.Contacts = data; });
  }
  
  deleteContact(id) {
    return this._list.deleteContact(id)
      .subscribe(() => this.getContactsData());
  }

  ngOnInit(): void {
    this.getContactsData()
  }

}
