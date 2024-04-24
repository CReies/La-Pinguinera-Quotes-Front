import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LabelComponent } from '../../elements/label/label.component';
import {
  AbstractControl,
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

  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    price: new FormControl(0),
    type: new FormControl(''),
  });

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      author: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.min(0)]],
      type: ['', [Validators.required]],
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
    console.log(this.form);

    if (this.form.invalid) {
      return;
    }

    this.addBook.emit(this.form.getRawValue());
    this.resetForm();
  }
}
