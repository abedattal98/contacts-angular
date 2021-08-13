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
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from  '@angular/material/input'
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';

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
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatSnackBarModule
    ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
