import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UcenikComponent } from './component/ucenik/ucenik.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { UcenikService } from './service/ucenik.service';
import { AddUcenikComponent } from './component/add-ucenik/add-ucenik.component';

const routes: Routes = [
  { path: 'students', component: UcenikComponent },
  { path: '**', redirectTo: 'students' }
];


@NgModule({
  declarations: [
    AppComponent,
    UcenikComponent,
    AddUcenikComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes) ,
    HttpModule   
  ],
  providers: [
    UcenikService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
