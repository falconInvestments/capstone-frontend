import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-signout-button',
  templateUrl: './signout-button.component.html',
  styleUrls: ['./signout-button.component.scss'],
})
export class SignoutButtonComponent implements OnInit {
  isSignedIn: boolean = this.cookieService.get('falcon-sid') ? true : false;

  constructor(private router: Router, private cookieService: CookieService) {}

  ngOnInit(): void {}

  onClick() {
    this.cookieService.delete('falcon.sid');
    this.router.navigate(['/']);
  }
}
