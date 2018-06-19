import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { URLSearchParams } from '@angular/http/src/url_search_params';
import { Polaganje } from '../model/polaganje.model';

@Injectable({
  providedIn: 'root'
})
export class PolaganjeService {

  private polaganjeUrl = 'api/polaganje';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  private RegenerateData = new Subject<void>();

  RegenerateData$ = this.RegenerateData.asObservable();

  announceChange() {
      this.RegenerateData.next();
  }

  getPolaganja(): Observable<Polaganje[]> {
      let params: HttpParams = new HttpParams();
      return this.http.get<Polaganje[]>(this.polaganjeUrl, {params});
  }

  getPolaganje(id: number): Observable<Polaganje> {
      return this.http.get<Polaganje>('${this.polaganjeUrl}/$id}');
  }

  savePolaganje(polaganje: Polaganje): Observable<Polaganje> {
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  // let options = new RequestOptions({ headers: headers });
  return this.http.
    post<Polaganje>(this.polaganjeUrl, JSON.stringify(polaganje), { headers });
  }

  editPolaganje(polaganje: Polaganje): Observable<Polaganje> {
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.put<Polaganje>(this.polaganjeUrl, JSON.stringify(polaganje), {headers});
  }

  deletePolaganje(id: number): Observable<Polaganje> {
      const url = `${this.polaganjeUrl}/${id}`;
      return this.http.delete<Polaganje>(url);
  }

  handleError(error: any): Promise<any> {
      console.error("Error... ", error);
      return Promise.reject(error.message || error);
  }
}
