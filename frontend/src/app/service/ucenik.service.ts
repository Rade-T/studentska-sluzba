import { Ucenik } from '../model/ucenik.model';
import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { URLSearchParams } from '@angular/http/src/url_search_params';

@Injectable({
    providedIn: 'root'
})
export class UcenikService {

    private ucenikUrl = 'api/ucenik';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) { }

    private RegenerateData = new Subject<void>();

    RegenerateData$ = this.RegenerateData.asObservable();

    announceChange() {
        this.RegenerateData.next();
    }

    getUcenici(): Observable<Ucenik[]> {
        let params: HttpParams = new HttpParams();
        return this.http.get<Ucenik[]>(this.ucenikUrl, {params});
    }

    getUcenik(id: number): Observable<Ucenik> {
        return this.http.get<Ucenik>('${this.ucenikUrl}/$id}');
    }

    saveUcenik(ucenik: Ucenik): Observable<Ucenik> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
		// let options = new RequestOptions({ headers: headers });
		return this.http.
			post<Ucenik>(this.ucenikUrl, JSON.stringify(ucenik), { headers });
    }

    editUcenik(ucenik: Ucenik): Observable<Ucenik> {
        const url = `${this.ucenikUrl}/${ucenik.id}`;
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put<Ucenik>(url, JSON.stringify(ucenik), {headers});
    }

    deleteUcenik(id: number): Observable<Ucenik> {
        const url = `${this.ucenikUrl}/${id}`;
        return this.http.delete<Ucenik>(url);
    }

    /*  getUcenikEnrollments(studentId: number): Promise<Enrollment[]> {
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
