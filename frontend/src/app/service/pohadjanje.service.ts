import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { URLSearchParams } from '@angular/http/src/url_search_params';
import { Pohadjanje } from '../model/pohadjanje.model';

@Injectable({
  providedIn: 'root'
})
export class PohadjanjeService {

  private pohadjanjeUrl = 'api/pohadjanje';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) { }

    private RegenerateData = new Subject<void>();

    RegenerateData$ = this.RegenerateData.asObservable();

    announceChange() {
        this.RegenerateData.next();
    }

    getPohadjanja(): Observable<Pohadjanje[]> {
        let params: HttpParams = new HttpParams();
        return this.http.get<Pohadjanje[]>(this.pohadjanjeUrl, {params});
    }

    getPohadjanje(id: number): Observable<Pohadjanje> {
        return this.http.get<Pohadjanje>('${this.pohadjanjeUrl}/$id}');
    }

    savePohadjanje(pohadjanje: Pohadjanje): Observable<Pohadjanje> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
		// let options = new RequestOptions({ headers: headers });
		return this.http.
			post<Pohadjanje>(this.pohadjanjeUrl, JSON.stringify(pohadjanje), { headers });
    }

    editPohadjanje(pohadjanje: Pohadjanje): Observable<Pohadjanje> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put<Pohadjanje>(this.pohadjanjeUrl, JSON.stringify(pohadjanje), {headers});
    }

    deletePohadjanje(id: number): Observable<Pohadjanje> {
        const url = `${this.pohadjanjeUrl}/${id}`;
        return this.http.delete<Pohadjanje>(url);
    }

    handleError(error: any): Promise<any> {
        console.error("Error... ", error);
        return Promise.reject(error.message || error);
    }
}
