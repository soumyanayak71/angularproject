import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { XMLData } from '../XMLData';
import { RequestHeaders } from '../RequestHeaders';

const httpOptions :RequestHeaders= {
headers: new HttpHeaders(
  {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin':'*'
  }),
observe: 'response'
};
const apiUrl = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class XmlDataService {
  sendData(xmlData: XMLData): Observable<HttpResponse<String>> {
    return this.http.post<HttpResponse<String>>(apiUrl+"trailhome", xmlData, httpOptions)
  }

  getFile() {
    return this.http.get(apiUrl+"download", { responseType: 'blob' });
  }
  constructor(private http: HttpClient) { }
}
