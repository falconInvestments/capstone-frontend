import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'https://capstone-certificates.herokuapp.com/api/certificates';

@Injectable({
  providedIn: 'root',
})
export class CertificateService {
  constructor(private http: HttpClient) {}

  getAllCertificates(): Observable<any> {
    return this.http.get(baseUrl);
  }
}
