import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { URLSearchParams } from '@angular/http/src/url_search_params';
import { Predmet } from '../model/predmet.model';

@Injectable({
  providedIn: 'root'
})
export class PredmetService {

  private predmetUrl = 'api/predmet';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  private RegenerateData = new Subject<void>();

  RegenerateData$ = this.RegenerateData.asObservable();

  announceChange() {
      this.RegenerateData.next();
  }

  getPredmeti(): Observable<Predmet[]> {
      let params: HttpParams = new HttpParams();
      return this.http.get<Predmet[]>(this.predmetUrl, {params});
  }

  getPredmet(id: number): Observable<Predmet> {
      return this.http.get<Predmet>('${this.predmetUrl}/$id}');
  }

  savePredmet(predmet: Predmet): Observable<Predmet> {
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  // let options = new RequestOptions({ headers: headers });
  return this.http.
    post<Predmet>(this.predmetUrl, JSON.stringify(predmet), { headers });
  }

  editPredmet(predmet: Predmet): Observable<Predmet> {
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      const url = `${this.predmetUrl}/${predmet.id}`;
      return this.http.put<Predmet>(url, JSON.stringify(predmet), {headers});
  }

  deletePredmet(id: number): Observable<Predmet> {
      const url = `${this.predmetUrl}/${id}`;
      return this.http.delete<Predmet>(url);
  }

  handleError(error: any): Promise<any> {
      console.error("Error... ", error);
      return Promise.reject(error.message || error);
  }
}
