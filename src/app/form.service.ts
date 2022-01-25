import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// const baseUrl = 'https://falconInvestments.herokuapp.com';
const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private http: HttpClient) {}

  submitSignup(formValues: any): Observable<any> {
    const newUser = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      password: formValues.password,
    };

    return this.http.post(baseUrl + '/signup', newUser);
  }

  submitSignin(formValues: any): Observable<any> {
    const userCredentials = {
      email: formValues.email,
      password: formValues.password,
    };
    return this.http.post(baseUrl + '/signin', userCredentials);
  }
}
