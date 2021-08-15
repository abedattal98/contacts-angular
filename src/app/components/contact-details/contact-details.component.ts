import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from 'src/app/services/contact.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  id =null
  contact: Contact;
  isShown=false
  constructor(private route: ActivatedRoute,private router:Router, private _list: ContactsService , private sb:SnackbarService) {  }

  getContactData(id:string) {
    return this._list.getContact(id).subscribe(
      (data: Contact) => {
       this.isShown=true
       this.contact=data   
    })
  }
  deleteContact(id) {
    return this._list.deleteContact(id)
      .subscribe(() => {
        this.router.navigate(["../"])
        this.sb.success("Contact Deleted!")
      });   
  }
  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id')
      console.log(this.id)
      this.getContactData(this.id)
    ;
  }

}
