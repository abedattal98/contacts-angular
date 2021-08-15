import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ContactsService } from 'src/app/services/contact.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  isLoading:boolean=false
  displayedColumns: string[] = ['position', 'firstname', 'lastname', 'phone','email','edit'];
  Contacts: Contact
  id: string
  constructor(private _list: ContactsService, private sb:SnackbarService, private route:Router) { }

  getContactsData() {
    return this._list.getContacts()
      .subscribe((data: any) => { 
        this.Contacts = data
        this.isLoading=true
      },
      error => {
        alert(error)
        console.log(error);
      });
      
  }

  deleteContact(id) {
    return this._list.deleteContact(id)
      .subscribe(() => {
        this.getContactsData()
        this.sb.success("Contact Deleted!")
      });  
  }
  ngOnInit(): void {
    this.getContactsData()
  }

}
