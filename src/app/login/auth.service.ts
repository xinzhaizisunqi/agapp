import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Auth } from './Auth';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { ApiResponse } from "./apiresponse";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //loginurl = 'http://42.192.80.206:8083/login';
  loginurl='http://localhost:8083/login';
  constructor(private http: HttpClient) { }
  authUser(auth: Auth): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.loginurl, auth).pipe(
      catchError(this.handleError) // then handle the error
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
