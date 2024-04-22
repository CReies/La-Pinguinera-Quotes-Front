import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LabelComponent } from '../../elements/label/label.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../elements/button/button.component';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [LabelComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css', '../../styles/auth-form.css'],
})
export class AddBookComponent implements OnInit {
  @Output() addBook = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {}

  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    price: new FormControl(0),
    type: new FormControl(''),
  });

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      price: ['', [Validators.required]],
      type: ['', [Validators.required]],
    });
  }

  sendInfo($event: SubmitEvent) {
    $event.preventDefault();
    if (this.form.invalid) {
      alert('Please fill in the form correctly');
      return;
    }

    this.addBook.emit(this.form.getRawValue());
  }
}
