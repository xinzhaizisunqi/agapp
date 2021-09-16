import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { User } from './User';
import { Observable } from 'rxjs';
import { ApiResponse } from "./apiresponse";

@Injectable({
  providedIn: 'root'
})
export class UserService {

heroesUrl = 'http://localhost:8083/getUd';  // URL to web api


  constructor(
    private http: HttpClient) {
  }

    /* GET heroes whose name contains search term */
    searchHeroes(term: string,host: string): Observable<ApiResponse> {
      term = term.trim();
      // Add safe, URL encoded search parameter if there is a search term
      const options = term ?
       { params: new HttpParams().set('host', host).set('mobile', term) } : {};

      return this.http.get<ApiResponse>(this.heroesUrl, options)
        .pipe(
        );
    }
}
