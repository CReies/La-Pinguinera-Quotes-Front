import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() type: string = '';
  @Input() name: string = '';
  @Input() id: string = '';
  @Input() required: boolean = false;
}
