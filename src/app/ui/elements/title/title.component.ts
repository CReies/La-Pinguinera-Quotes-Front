import { Component, Input, input } from '@angular/core';
import { ITitleType } from '../../../core/interfaces/ITitleType';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css',
})
export class TitleComponent {
  @Input() title = 'Title';
  @Input() titleType!: ITitleType;
}
