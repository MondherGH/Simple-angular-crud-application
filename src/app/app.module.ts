import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RouterModule, Routes} from "@angular/router";
import { AboutComponent } from './about/about.component';
import {Http, HttpModule} from "@angular/http";
import {ContactsService} from "../service/contacts.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NewContactComponent } from './new-contact/new-contact.component';
import { NouveauContactComponent } from './nouveau-contact/nouveau-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import {TranslateLoader, TranslateModule, TranslateStaticLoader} from "ng2-translate";
import {ModalDirective, ModalModule} from "ng2-bootstrap";

const appRoutes:Routes=[
  {path:'about',component:AboutComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'new-contact',component:NewContactComponent},
  {path:'editContact/:id',component:EditContactComponent},
  {path:'',redirectTo:'/about',pathMatch:'full'}

];
export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './i18n', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent,
    NewContactComponent,
    NouveauContactComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),HttpModule,FormsModule,ReactiveFormsModule,
    ModalModule.forRoot(),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
  ],

  providers: [ContactsService,EditContactComponent,ContactsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
