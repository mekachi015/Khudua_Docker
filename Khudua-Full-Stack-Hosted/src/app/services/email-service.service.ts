import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, Observable, tap } from 'rxjs';
import { UserQuery } from '../interface/contactQuery';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {


  private apiUrl = 'http://localhost:8080/api/contact/api/contact';

  constructor(private http: HttpClient) { }

  // submitQuery(userQuery: UserQuery): Observable<string> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   return this.http.post<string>(this.apiUrl, userQuery, { headers });
  // }

  // submitQuery(userQuery: UserQuery): Observable<string> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   return this.http.post<string>(this.apiUrl, userQuery, { headers }).pipe(
  //     tap(response => console.log('Response:', response)),
  //     catchError(error => {
  //       console.error('Error:', error);
  //       throw error;
  //     })
  //   );
  // }

  submitQuery(userQuery: UserQuery): Observable<HttpResponse<string>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<string>(this.apiUrl, userQuery, { headers, observe: 'response' });
  }
}


