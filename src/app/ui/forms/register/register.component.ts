import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TitleComponent } from '../../elements/title/title.component';
import { ButtonComponent } from '../../elements/button/button.component';
import { LabelComponent } from '../../elements/label/label.component';
import { AnchorComponent } from '../../elements/anchor/anchor.component';
import {
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

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  sendInfo($event: SubmitEvent) {
    $event.preventDefault();
    if (this.form.invalid) {
      alert('Please fill in the form correctly');
      return;
    }

    this.register.emit(this.form.getRawValue());
  }
}
