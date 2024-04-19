import { Component } from '@angular/core';
import { TitleComponent } from '../../elements/title/title.component';
import { InputComponent } from '../../elements/input/input.component';
import { ButtonComponent } from '../../elements/button/button.component';
import { LabelComponent } from '../../elements/label/label.component';
import { AnchorComponent } from '../../elements/anchor/anchor.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    TitleComponent,
    InputComponent,
    ButtonComponent,
    LabelComponent,
    AnchorComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {}
