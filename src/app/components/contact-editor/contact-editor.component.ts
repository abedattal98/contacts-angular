import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from 'src/app/services/contact.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { environment } from 'src/environments/environment';
import { Contact } from '../../models/contact';
import {first} from 'rxjs/operators'

@Component({
  selector: 'app-contact-editor',
  templateUrl: './contact-editor.component.html',
  styleUrls: ['./contact-editor.component.css']
})
export class ContactEditorComponent implements OnInit {
  contact: Contact ;
  private _url: string = environment.api_url;
 // @Input() mode:string
  id: string;
  profileForm:FormGroup
  initialform:FormGroup
  isAddMode: boolean;

  constructor(
    private fb: FormBuilder, 
    private http: HttpClient, 
    private sb:SnackbarService, 
    private router: ActivatedRoute, 
    private route:Router,
    private _list:ContactsService
  )  { }


  isChange:boolean = true
  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.isAddMode = !this.id;
    
  this.initialform = this.fb.group({
    firstname: [''],
    lastname: [''],
    phone: [''],
    email: [''],
  });
    this.profileForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      phone: [''],
      email: [''],
    });
    if (!this.isAddMode) {
      this._list.getContact(this.id)
          .pipe(first())
          .subscribe(x => {
            this.profileForm.patchValue(x)
            this.initialform.patchValue(x)
            this.isChange=true
          });
     this.profileForm.valueChanges.subscribe(change => {
     if(JSON.stringify(this.initialform.value) == JSON.stringify(this.profileForm.value))
     this.isChange = true
     else this.isChange= false
    });
  }
   
  }
  onSubmit() {
    if (this.isAddMode) {
      this.createUser();
  } else {
      this.updateUser();
  }
   // this._list.createContact(this.profileForm.value) 
   }
   private createUser() {
     
    this._list.createContact(this.profileForm.value)
    .pipe(first())
 
    .subscribe({
      next: () => {
       this.sb.success('Contact created Succesufully')
      this.route.navigate(['../']);
      },
      error: error => {
        this.sb.success('Error while creating')
      }
  });
     
}
private updateUser() {
  this._list.updateContact(this.id, this.profileForm.value)
      .pipe(first())
      .subscribe({
          next: () => {
            this.sb.success('Contact updated Succesufully')
            this.route.navigate(['../../']);
          },
          error: error => {
            this.sb.success('Error in update ')
          }
      });
}
  
  

}

