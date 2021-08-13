import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactEditorComponent } from './components/contact-editor/contact-editor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactsService } from './services/contact.service';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ContactEditorComponent,
    ContactListComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule

  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
