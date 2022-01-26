import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Certificate } from '../certificate.model';
import { CertificateService } from '../certificate.service';
import { UserStore } from '../store/user.store';

@Component({
  selector: 'app-certificates-list',
  templateUrl: './certificates-list.component.html',
  styleUrls: ['./certificates-list.component.scss'],
})
export class CertificatesListComponent implements OnInit {
  userId: number = NaN;
  userCertificates: Certificate[] = [];

  constructor(
    private userStore: UserStore,
    private certificateService: CertificateService
  ) {}

  ngOnInit(): void {
    this.loadCertificates();
  }

  loadCertificates() {
    let allCertificates: Certificate[] = [];
    this.userId = this.userStore.state.currentUser.id;
    this.certificateService.getAllCertificates().subscribe((response) => {
      allCertificates = response;
    });
    this.userCertificates = allCertificates.filter(
      (certificate) => certificate.userId === this.userId
    );
    console.log("After loading this user's certs:", this.userCertificates);
  }
}
