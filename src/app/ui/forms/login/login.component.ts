import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TitleComponent } from '../../elements/title/title.component';
import { ButtonComponent } from '../../elements/button/button.component';
import { LabelComponent } from '../../elements/label/label.component';
import { AnchorComponent } from '../../elements/anchor/anchor.component';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    TitleComponent,
    ButtonComponent,
    LabelComponent,
    AnchorComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../styles/auth-form.css'],
})
export class LoginComponent implements OnInit {
  @Output() login = new EventEmitter();

  submitted = false;

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  resetForm() {
    this.form.reset();
    this.submitted = false;
  }

  sendInfo($event: SubmitEvent) {
    $event.preventDefault();
    if (this.form.invalid) {
      alert('Please fill in the form correctly');
      return;
    }
    this.login.emit(this.form.getRawValue());
  }
}
