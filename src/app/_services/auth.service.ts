import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:4001/register';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(firstName: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      firstName,
      password
    }, httpOptions);
  }

  register(firstName: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      firstName,
      email,
      password
    }, httpOptions);
  }
}