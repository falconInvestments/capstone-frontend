import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { FormService } from '../form.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  constructor(
    private formService: FormService,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.formService.submitSignin(form.value).subscribe((response) => {
      console.log(response); // Plan: response should include both user ID and session ID
      this.cookieService.set('falcon.sid', response);
      // this.cookieValue = this.cookieService.get('falcon.sid');
    });
  }
}
