import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  minDate = new Date(Date.now());
  maxDate = new Date(Date.now());
  startDate = this.maxDate;

  constructor() {}

  ngOnInit() {
    this.maxDate.setDate(this.maxDate.getDate());
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    this.startDate = this.maxDate;
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
