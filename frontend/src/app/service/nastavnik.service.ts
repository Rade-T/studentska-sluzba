import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { URLSearchParams } from '@angular/http/src/url_search_params';
import { Nastavnik } from '../model/nastavnik.model';

@Injectable({
  providedIn: 'root'
})
export class NastavnikService {

  private url = 'api/nastavnik';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  private RegenerateData = new Subject<void>();

  RegenerateData$ = this.RegenerateData.asObservable();

  announceChange() {
    this.RegenerateData.next();
  }

  getNastavnici(): Observable<Nastavnik[]> {
    console.log("Ucitavanje nastavnika");
    let params: HttpParams = new HttpParams();
    var result = this.http.get<Nastavnik[]>(this.url, { params })
    console.log(result);
    return result;
  }

  getNastavnik(id: number): Observable<Nastavnik> {
    const url = `${this.url}/${id}`;
    var result = this.http.get<Nastavnik>(url);
    console.log(result);
    return result;
  }

  saveNastavnik(nastavnik: Nastavnik): Observable<Nastavnik> {
    console.log("Sacuvan nastavnik");
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });
    console.log(JSON.stringify(nastavnik));
    return this.http.
      post<Nastavnik>(this.url, JSON.stringify(nastavnik), { headers });
  }

  editNastavnik(nastavnik: Nastavnik): Observable<Nastavnik> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.url}/${nastavnik.id}`;
    return this.http.put<Nastavnik>(url, JSON.stringify(nastavnik), { headers });
  }

  deleteNastavnik(id: number): Observable<Nastavnik> {
    const url = `${this.url}/${id}`;
    return this.http.delete<Nastavnik>(url);
  }

  /*  getNastavnikEnrollments(studentId: number): Promise<Enrollment[]> {
        const url = `${this.studentsUrl}/${studentId}/courses`;
        return this.http.get(url)
            .toPromise()
            .then(response =>
                response.json() as Enrollment[])
            .catch(this.handleError);
    }*/

  handleError(error: any): Promise<any> {
    console.error("Error... ", error);
    return Promise.reject(error.message || error);
  }
}
