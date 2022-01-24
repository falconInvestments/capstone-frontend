import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  userResponse: any = null;

  constructor(private formService: FormService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.formService.submitSignup(form.value).subscribe((response) => {
      this.userResponse = response;
    });
  }
}
