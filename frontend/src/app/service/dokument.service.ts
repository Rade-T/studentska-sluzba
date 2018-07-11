import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { URLSearchParams } from '@angular/http/src/url_search_params';
import { Dokument } from '../model/dokument.model';
import { map } from 'rxjs/operators';

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
        let headers = new HttpHeaders({ });
        console.log("Krece upload");
        console.log(file);
        this.http.post(this.dokumentUrl + "/uploadFile", formData, { headers }).subscribe(response => console.log(response),
        err => console.log(err));
    }

    downloadFileProper(data: string){
        var blob = new Blob([data]);
        var url= window.URL.createObjectURL(blob);
        //window.location=url;
        window.open(url);
      }

    downloadFile(filename: string) {
        let headers = new HttpHeaders({ responseType: 'application/pdf' });
        this.http.get(this.dokumentUrl + "/downloadFile/" + filename, {  }).pipe(map(res => {
            return {
              filename: 'filename.pdf',
              data: res
            };
          })).subscribe(res => {console.log('start download:',res);
        var url = window.URL.createObjectURL(res.data);
        var a = document.createElement('a');
        document.body.appendChild(a);
        a.setAttribute('style', 'display: none');
        a.href = url;
        a.download = res.filename;
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove();},
        err => console.log(err));
    }

    handleError(error: any): Promise<any> {
        console.error("Error... ", error);
        return Promise.reject(error.message || error);
    }
}
