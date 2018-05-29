import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UcenikComponent } from './component/ucenik/ucenik.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

const routes: Routes = [
  { path: 'students', component: UcenikComponent },
  { path: '**', redirectTo: '' }
];


@NgModule({
  declarations: [
    AppComponent,
    UcenikComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) ,
    HttpModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
