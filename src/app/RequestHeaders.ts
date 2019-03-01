import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';

export interface RequestHeaders{
  body?: any;
  headers?: HttpHeaders | { [header: string]: string | Array<string> };
  observe?: any;
  params?: HttpParams | { [param: string]: string | Array<string> };
  reportProgress?: boolean;
  withCredentials?: boolean;
}
