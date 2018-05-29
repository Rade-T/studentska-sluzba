import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { Ucenik } from '../model/ucenik.model';

@Injectable({
  providedIn: 'root'
})
export class UcenikService {


  private studentsUrl = 'api/ucenik';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    private RegenerateData = new Subject<void>();

    RegenerateData$ = this.RegenerateData.asObservable();

    announceChange() {
        this.RegenerateData.next();
    }

    getUcenici(): Promise<Ucenik[]> {
        return this.http.get(this.studentsUrl)
            .toPromise()
            .then(response =>
                response.json() as Ucenik[]) 
            .catch(this.handleError);
    }

    getUcenik(id: number): Promise<Ucenik> {
        const url = `${this.studentsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response =>
                response.json() as Ucenik)
            .catch(this.handleError);
    }

    addUcenik(student: Ucenik): Promise<Ucenik> {
        return this.http
            .post(this.studentsUrl, JSON.stringify(student), { headers: this.headers })
            .toPromise()
            .then(res => res.json() as Ucenik)
            .catch(this.handleError);
    }

    editUcenik(student: Ucenik): Promise<Ucenik> {
        return this.http
            .put(this.studentsUrl, JSON.stringify(student), { headers: this.headers })
            .toPromise()
            .then(res => res.json() as Ucenik)
            .catch(this.handleError);
    }

    deleteUcenik(studentId: number): Promise<{}> {
        const url = `${this.studentsUrl}/${studentId}`;
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
