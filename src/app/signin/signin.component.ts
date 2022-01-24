import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  constructor(private formService: FormService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.formService
      .submitSignin(form.value)
      .subscribe((response) => console.log(response));
  }
}
