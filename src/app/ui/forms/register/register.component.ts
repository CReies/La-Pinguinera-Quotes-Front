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

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    TitleComponent,
    ButtonComponent,
    LabelComponent,
    AnchorComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../../styles/auth-form.css'],
})
export class RegisterComponent implements OnInit {
  @Output() register = new EventEmitter();

  submitted: boolean = false;

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(100),
        ],
      ],
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
    this.submitted = true;
    $event.preventDefault();

    if (this.form.invalid) {
      return;
    }

    this.register.emit(this.form.getRawValue());
    this.resetForm();
  }
}
