import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { ContactEditorComponent } from './components/contact-editor/contact-editor.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';

const routes: Routes = [
  { path: 'contact/create', component: ContactEditorComponent },
  { path: 'contact/:id', component: ContactDetailsComponent },
  { path: 'contact', component: ContactListComponent },
  { path: 'contact/edit/:id', component:  ContactEditorComponent },
  { path: '**', redirectTo: 'contact'}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
