import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FormService } from '../form.service';
import { UserStore } from '../store/user.store';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  constructor(
    private router: Router,
    private formService: FormService,
    private cookieService: CookieService,
    private userStore: UserStore
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.formService.submitSignin(form.value).subscribe((response) => {
      /*
      response should be in this format:
      { userId: <number>, sessionId: <string> }
      which is then stored in the cookie with the key "falcon.sid"
      */
      this.cookieService.set('falcon.sid', JSON.stringify(response));
      // this.cookieValue = this.cookieService.get('falcon.sid');
      this.userStore.setState({
        ...this.userStore.state,
        isSignedIn: true,
        currentUser: {
          ...this.userStore.state.currentUser,
          id: response.userId,
        },
      });
    });
    this.router.navigate(['/dashboard']);
  }
}
