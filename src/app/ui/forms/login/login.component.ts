import { Component, EventEmitter, Output } from '@angular/core';
import { TitleComponent } from '../../elements/title/title.component';
import { ButtonComponent } from '../../elements/button/button.component';
import { LabelComponent } from '../../elements/label/label.component';
import { AnchorComponent } from '../../elements/anchor/anchor.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

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
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @Output() login = new EventEmitter();

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  sendInfo($event: SubmitEvent) {
    $event.preventDefault();
    this.login.emit(this.form.getRawValue());
  }
}
