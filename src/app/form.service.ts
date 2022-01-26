import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://falconInvestments.herokuapp.com';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private http: HttpClient) {}

  submitSignup(formValues: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }): Observable<any> {
    return this.http.post(baseUrl + '/signup', formValues);
  }

  submitSignin(formValues: {
    email: string;
    password: string;
  }): Observable<any> {
    return this.http.post(baseUrl + '/signin', formValues);
  }
}
