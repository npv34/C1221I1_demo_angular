import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { NavbavComponent } from './components/core/navbav/navbav.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { InputSearchComponent } from './components/input-search/input-search.component';
import { MessageComponent } from './components/message/message.component';
import { UserAddComponent } from './components/users/user-add/user-add.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    NavbavComponent,
    InputSearchComponent,
    MessageComponent,
    UserAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
