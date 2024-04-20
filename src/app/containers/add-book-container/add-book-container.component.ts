import { Component } from '@angular/core';
import { AddBookComponent } from '../../ui/forms/add-book/add-book.component';

@Component({
  selector: 'app-add-book-container',
  standalone: true,
  imports: [AddBookComponent],
  templateUrl: './add-book-container.component.html',
})
export class AddBookContainerComponent {

}
