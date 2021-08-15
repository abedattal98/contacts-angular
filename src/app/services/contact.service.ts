import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { SnackbarService } from './snackbar.service';

@Injectable()
export class ContactsService {
    private _url: string = environment.api_url;
    id: string
    durationInSeconds = 5;
    
    constructor(private apiCaller: HttpClient, private route: Router, private sb: SnackbarService) {
    }

    getContacts() {
        return this.apiCaller
            .request('GET', this._url + 'contact')
    }
    getContact(id) {
        return this.apiCaller
            .request('GET', this._url + 'contact/' + id)
    }
    deleteContact(id) {
        return this.apiCaller
            .request('DELETE', this._url + 'contact/' + id)
    }
    createContact(contact) {
        return this.apiCaller.post(this._url + '/contact', contact)
    }
    updateContact(id,contact) {
      return  this.apiCaller.put<any>(this._url + 'contact/'+id, contact)
    }
}

