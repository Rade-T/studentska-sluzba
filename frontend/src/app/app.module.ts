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
import { UcenikItemComponent } from './component/ucenik-item/ucenik-item.component';
import { MainComponent } from './component/main/main.component';
import { NastavnikComponent } from './component/nastavnik/nastavnik.component';
import { NastavnikItemComponent } from './component/nastavnik-item/nastavnik-item.component';
import { AddNastavnikComponent } from './component/add-nastavnik/add-nastavnik.component';
import { NastavnikService } from './service/nastavnik.service';

const routes: Routes = [
  { path: 'students', component: UcenikComponent },
  { path: 'nastavnici', component: NastavnikComponent },
  { path: 'main', component: MainComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
];


@NgModule({
  declarations: [
    AppComponent,
    UcenikComponent,
    AddUcenikComponent,
    UcenikItemComponent,
    MainComponent,
    NastavnikComponent,
    NastavnikItemComponent,
    AddNastavnikComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes) ,
    HttpModule   
  ],
  providers: [
    UcenikService,
    NastavnikService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
