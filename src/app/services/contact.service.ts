import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class ContactsService {
    private _url: string = environment.api_url;
    id:string

    constructor(private apiCaller: HttpClient) {
    }
    getContacts () {
        return this.apiCaller
            .request('GET', this._url+'contact')
    }
    getContact (id) {
        return this.apiCaller
            .request('GET',this._url+'contact/'+id)
    }
    deleteContact (id) {
        return this.apiCaller
            .request('DELETE',this._url+'contact/'+id)
    }
    createContact(contact){
        this.apiCaller.post(this._url+'/contact', contact)
        .subscribe(
          (response) => console.log(response),
          (error) => console.log(error),
        )
    }
}

