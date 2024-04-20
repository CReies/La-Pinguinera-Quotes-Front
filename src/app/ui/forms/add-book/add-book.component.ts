import { Component } from '@angular/core';
import { LabelComponent } from '../../elements/label/label.component';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [LabelComponent],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {

}
