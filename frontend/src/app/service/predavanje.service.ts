import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { URLSearchParams } from '@angular/http/src/url_search_params';
import { Predavanje } from '../model/predavanje.model';

@Injectable({
  providedIn: 'root'
})
export class PredavanjeService {

  private predavanjeUrl = 'api/predavanje';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  private RegenerateData = new Subject<void>();

  RegenerateData$ = this.RegenerateData.asObservable();

  announceChange() {
      this.RegenerateData.next();
  }

  getPredavanja(): Observable<Predavanje[]> {
      let params: HttpParams = new HttpParams();
      return this.http.get<Predavanje[]>(this.predavanjeUrl, {params});
  }

  getPredavanje(id: number): Observable<Predavanje> {
      return this.http.get<Predavanje>('${this.predavanjeUrl}/$id}');
  }

  savePredavanje(predavanje: Predavanje): Observable<Predavanje> {
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  // let options = new RequestOptions({ headers: headers });
  return this.http.
    post<Predavanje>(this.predavanjeUrl, JSON.stringify(predavanje), { headers });
  }

  editPredavanje(predavanje: Predavanje): Observable<Predavanje> {
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.put<Predavanje>(this.predavanjeUrl, JSON.stringify(predavanje), {headers});
  }

  deletePredavanje(id: number): Observable<Predavanje> {
      const url = `${this.predavanjeUrl}/${id}`;
      return this.http.delete<Predavanje>(url);
  }

  handleError(error: any): Promise<any> {
      console.error("Error... ", error);
      return Promise.reject(error.message || error);
  }
}
