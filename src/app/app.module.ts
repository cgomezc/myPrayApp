import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PrayListComponent } from './pray-list/pray-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PrayDetailsComponent } from './pray-details/pray-details.component';
@NgModule({
  declarations: [
    AppComponent,
    PrayListComponent,
    TopBarComponent,
    PrayDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: PrayListComponent },
      { path: 'prayers/:productId', component: PrayDetailsComponent },
     
    ]),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
