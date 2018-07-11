import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { URLSearchParams } from '@angular/http/src/url_search_params';
import { Uplata } from '../model/uplata.model';

@Injectable({
  providedIn: 'root'
})
export class UplataService {

  private uplataUrl = 'api/uplata';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  private RegenerateData = new Subject<void>();

  RegenerateData$ = this.RegenerateData.asObservable();

  announceChange() {
      this.RegenerateData.next();
  }

  getUplate(): Observable<Uplata[]> {
      let params: HttpParams = new HttpParams();
      return this.http.get<Uplata[]>(this.uplataUrl, {params});
  }

  getUplata(id: number): Observable<Uplata> {
      return this.http.get<Uplata>('${this.uplataUrl}/$id}');
  }

  saveUplata(uplata: Uplata): Observable<Uplata> {
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  // let options = new RequestOptions({ headers: headers });
  return this.http.
    post<Uplata>(this.uplataUrl, JSON.stringify(uplata), { headers });
  }

  editUplata(uplata: Uplata): Observable<Uplata> {
      const url = `${this.uplataUrl}/${uplata.id}`;
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.put<Uplata>(url, JSON.stringify(uplata), {headers});
  }

  deleteUplata(id: number): Observable<Uplata> {
      const url = `${this.uplataUrl}/${id}`;
      return this.http.delete<Uplata>(url);
  }

  handleError(error: any): Promise<any> {
      console.error("Error... ", error);
      return Promise.reject(error.message || error);
  }
}
