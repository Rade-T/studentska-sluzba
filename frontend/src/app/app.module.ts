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
import { PredmetComponent } from './component/predmet/predmet.component';
import { PredmetItemComponent } from './component/predmet-item/predmet-item.component';
import { AddPredmetComponent } from './component/add-predmet/add-predmet.component';
import { PredmetService } from './service/predmet.service';

const routes: Routes = [
  { path: 'students', component: UcenikComponent },
  { path: 'nastavnici', component: NastavnikComponent },
  { path: 'predmeti', component: PredmetComponent },
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
    AddNastavnikComponent,
    PredmetComponent,
    PredmetItemComponent,
    AddPredmetComponent
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
    NastavnikService,
    PredmetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
