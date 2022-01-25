import { Component, OnInit } from '@angular/core';
import { Certificate } from '../certificate.model';
import { CertificateService } from '../certificate.service';

@Component({
  selector: 'app-certificates-list',
  templateUrl: './certificates-list.component.html',
  styleUrls: ['./certificates-list.component.scss'],
})
export class CertificatesListComponent implements OnInit {
  certificates: Certificate[] = [];

  constructor(private certificateService: CertificateService) {}

  ngOnInit(): void {
    this.getCertificates();
  }

  getCertificates() {
    this.certificateService.getAllCertificates().subscribe((certificates) => {
      this.certificates = certificates;
    });
  }
}
