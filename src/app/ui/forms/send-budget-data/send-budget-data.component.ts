import { Component, EventEmitter, Output } from '@angular/core';
import { LabelComponent } from '../../elements/label/label.component';
import { ButtonComponent } from '../../elements/button/button.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-send-budget-data',
  standalone: true,
  imports: [ButtonComponent, LabelComponent, ReactiveFormsModule],
  templateUrl: './send-budget-data.component.html',
  styleUrls: ['./send-budget-data.component.css', '../../styles/auth-form.css'],
})
export class SendBudgetDataComponent {
  @Output() sendBudgetData = new EventEmitter();

  form: FormGroup = new FormGroup({
    budget: new FormControl(0),
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      budget: [0, [Validators.required]],
    });
  }

  sendInfo($event: SubmitEvent) {
    $event.preventDefault();
    this.sendBudgetData.emit(this.form.getRawValue());
  }
}
