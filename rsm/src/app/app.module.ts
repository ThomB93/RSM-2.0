import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LaugComponent } from './laug/laug.component';
import { FrivilligDetailComponent } from './frivillige/frivillig-detail/frivillig-detail.component';
import { FrivilligListComponent } from './frivillige/frivillig-list/frivillig-list.component';
import { FrivilligItemComponent } from './frivillige/frivillig-list/frivillig-item/frivillig-item.component';
import { FrivilligeComponent } from './frivillige/frivillige.component';

@NgModule({
  declarations: [
    AppComponent,
    LaugComponent,
    FrivilligDetailComponent,
    FrivilligListComponent,
    FrivilligItemComponent,
    FrivilligeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
