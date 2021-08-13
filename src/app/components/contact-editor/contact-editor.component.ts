import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { ContactsService } from 'src/app/services/contact.service';
import { environment } from 'src/environments/environment';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact-editor',
  templateUrl: './contact-editor.component.html',
  styleUrls: ['./contact-editor.component.css']
})
export class ContactEditorComponent implements OnInit {
  contact: Contact ;
  private _url: string = environment.api_url;


  constructor(private fb: FormBuilder, private http: HttpClient, private route:Router, private _list:ContactsService) { }
  profileForm = this.fb.group({
    firstname: [''],
    lastname: [''],
    phone: [''],
    email: [''],
  });
  initialform = this.fb.group({
    firstname: [''],
    lastname: [''],
    phone: [''],
    email: [''],
  });

  onSubmit() {
   this._list.createContact(this.profileForm.value) 
  }
  isChange:boolean = true

  ngOnInit(): void {
    console.log(this.isChange)
    this.profileForm.valueChanges.subscribe(change => {
     if(JSON.stringify(this.initialform.value) == JSON.stringify(this.profileForm.value))
     this.isChange = true
     else this.isChange= false
    });
  }

  

}
