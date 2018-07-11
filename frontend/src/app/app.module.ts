import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { EditNastavnikComponent } from './component/edit-nastavnik/edit-nastavnik.component';
import { EditUcenikComponent } from './component/edit-ucenik/edit-ucenik.component';
import { PolaganjeComponent } from './component/polaganje/polaganje.component';
import { AddPolaganjeComponent } from './component/add-polaganje/add-polaganje.component';
import { EditPolaganjeComponent } from './component/edit-polaganje/edit-polaganje.component';
import { PolaganjeService } from './service/polaganje.service';
import { PolaganjeItemComponent } from './component/polaganje-item/polaganje-item.component';
import { EditPredmetComponent } from './component/edit-predmet/edit-predmet.component';
import { DokumentComponent } from './component/dokument/dokument.component';
import { AddDokumentComponent } from './component/add-dokument/add-dokument.component';
import { EditDokumentComponent } from './component/edit-dokument/edit-dokument.component';
import { DokumentItemComponent } from './component/dokument-item/dokument-item.component';
import { PredavanjeComponent } from './component/predavanje/predavanje.component';
import { PredavanjeItemComponent } from './component/predavanje-item/predavanje-item.component';
import { AddPredavanjeComponent } from './component/add-predavanje/add-predavanje.component';
import { EditPredavanjeComponent } from './component/edit-predavanje/edit-predavanje.component';
import { PredavanjeService } from './service/predavanje.service';
import { DokumentService } from './service/dokument.service';
import { AddPohadjanjeComponent } from './component/add-pohadjanje/add-pohadjanje.component';
import { EditPohadjanjeComponent } from './component/edit-pohadjanje/edit-pohadjanje.component';
import { PohadjanjaComponent } from './component/pohadjanja/pohadjanja.component';
import { PohadjanjeItemComponent } from './component/pohadjanje-item/pohadjanje-item.component';
import { LoginComponent } from './component/login/login.component';
import { TokenInterceptorService } from './security/token-interceptor.service';
import { JwtUtilsService } from './security/jwt-utils.service';
import { CanActivateAuthGuard } from './security/can-activate-auth.guard';
import { AuthenticationService } from './security/authentication.service';
import { UplataService } from './service/uplata.service';
import { UplataComponent } from './component/uplata/uplata.component';
import { UplataItemComponent } from './component/uplata-item/uplata-item.component';
import { AddUplataComponent } from './component/add-uplata/add-uplata.component';
import { EditUplataComponent } from './component/edit-uplata/edit-uplata.component';

const routes: Routes = [
  { path: 'ucenici', component: UcenikComponent, canActivate:[CanActivateAuthGuard] },
  { path: 'nastavnici', component: NastavnikComponent, canActivate:[CanActivateAuthGuard] },
  { path: 'predmeti', component: PredmetComponent, canActivate:[CanActivateAuthGuard] },
  { path: 'polaganja', component: PolaganjeComponent, canActivate:[CanActivateAuthGuard] },
  { path: 'dokumenti', component: DokumentComponent, canActivate:[CanActivateAuthGuard] },
  { path: 'predavanja', component: PredavanjeComponent, canActivate:[CanActivateAuthGuard] },
  { path: 'pohadjanja', component: PohadjanjaComponent, canActivate:[CanActivateAuthGuard] },
  { path: 'uplate', component: UplataComponent, canActivate:[CanActivateAuthGuard] },
  { path: 'main', component: MainComponent, canActivate:[CanActivateAuthGuard] },
  { path: 'login', component: LoginComponent},
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
    AddPredmetComponent,
    EditNastavnikComponent,
    EditUcenikComponent,
    PolaganjeComponent,
    AddPolaganjeComponent,
    EditPolaganjeComponent,
    PolaganjeItemComponent,
    EditPredmetComponent,
    DokumentComponent,
    AddDokumentComponent,
    EditDokumentComponent,
    DokumentItemComponent,
    PredavanjeComponent,
    PredavanjeItemComponent,
    AddPredavanjeComponent,
    EditPredavanjeComponent,
    AddPohadjanjeComponent,
    EditPohadjanjeComponent,
    PohadjanjaComponent,
    PohadjanjeItemComponent,
    LoginComponent, 
    UplataComponent,
    UplataItemComponent,
    AddUplataComponent,
    EditUplataComponent
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
    PredmetService,
    PolaganjeService,
    PredavanjeService,
    DokumentService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    AuthenticationService,
    CanActivateAuthGuard,
    JwtUtilsService,
    DokumentService,
    UplataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
