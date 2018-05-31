import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UcenikComponent } from './component/ucenik/ucenik.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { UcenikService } from './service/ucenik.service';

const routes: Routes = [
  { path: 'students', component: UcenikComponent },
  { path: '**', redirectTo: 'students' }
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
  providers: [
    UcenikService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
