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
        // console.log("Entered service");
        // var result = this.http.get(this.ucenikUrl)
        //     .toPromise()
        //     .then(response =>
        //         response.json() as Ucenik[])
        //     .catch(this.handleError);
        // console.log(result);
        // return result;
        let params: HttpParams = new HttpParams();
        return this.http.get<Ucenik[]>(this.ucenikUrl, {params});
    }

    getUcenik(id: number): Observable<Ucenik> {
        // const url = `${this.ucenikUrl}/${id}`;
        // return this.http.get(this.ucenikUrl)
        //     .toPromise()
        //     .then(response =>
        //         response.json() as Ucenik)
        //     .catch(this.handleError);
        return this.http.get<Ucenik>('${this.ucenikUrl}/$id}');
    }

    saveUcenik(ucenik: Ucenik): Observable<Ucenik> {
        // return this.http
        //     .post(this.ucenikUrl, JSON.stringify(student), { headers: this.headers })
        //     .toPromise()
        //     .then(res => res.json() as Ucenik)
        //     .catch(this.handleError);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
		// let options = new RequestOptions({ headers: headers });
		return this.http.
			post<Ucenik>(this.ucenikUrl, JSON.stringify(ucenik), { headers });
    }

    editUcenik(ucenik: Ucenik): Observable<Ucenik> {
        // return this.http
        //     .put(this.ucenikUrl, JSON.stringify(ucenik), { headers: this.headers })
        //     .toPromise()
        //     .then(res => res.json() as Ucenik)
        //     .catch(this.handleError);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put<Ucenik>(this.ucenikUrl, JSON.stringify(ucenik), {headers});
    }

    deleteUcenik(studentId: number): Promise<{}> {
        const url = `${this.ucenikUrl}/${studentId}`;
        return this.http
            .delete(url)
            .toPromise()
            .catch(this.handleError);
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
