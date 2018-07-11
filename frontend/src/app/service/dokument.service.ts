import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { URLSearchParams } from '@angular/http/src/url_search_params';
import { Dokument } from '../model/dokument.model';

@Injectable({
    providedIn: 'root'
})
export class DokumentService {

    private dokumentUrl = 'api/dokument';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) { }

    private RegenerateData = new Subject<void>();

    RegenerateData$ = this.RegenerateData.asObservable();

    announceChange() {
        this.RegenerateData.next();
    }

    getDokumenti(): Observable<Dokument[]> {
        let params: HttpParams = new HttpParams();
        return this.http.get<Dokument[]>(this.dokumentUrl, { params });
    }

    getDokument(id: number): Observable<Dokument> {
        return this.http.get<Dokument>('${this.dokumentUrl}/$id}');
    }

    saveDokument(dokument: Dokument): Observable<Dokument> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        // let options = new RequestOptions({ headers: headers });
        return this.http.
            post<Dokument>(this.dokumentUrl, JSON.stringify(dokument), { headers });
    }

    editDokument(dokument: Dokument): Observable<Dokument> {
        const url = `${this.dokumentUrl}/${dokument.id}`;
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put<Dokument>(url, JSON.stringify(dokument), { headers });
    }

    deleteDokument(id: number): Observable<Dokument> {
        const url = `${this.dokumentUrl}/${id}`;
        return this.http.delete<Dokument>(url);
    }

    uploadFile(file: File) {
        let formData: FormData = new FormData();
        formData.append('file', file);
        let headers = new HttpHeaders({ 'Content-Type': 'multipart/form-data' });
        console.log("Krece upload");
        console.log(file);
        this.http.post('/api/dokument/uploadFile/', formData, { headers });
    }

    handleError(error: any): Promise<any> {
        console.error("Error... ", error);
        return Promise.reject(error.message || error);
    }
}
