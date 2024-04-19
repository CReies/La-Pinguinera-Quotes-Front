import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-anchor',
  standalone: true,
  imports: [],
  templateUrl: './anchor.component.html',
  styleUrl: './anchor.component.css',
})
export class AnchorComponent {
  @Input() href: string = '';
  @Input() text: string = '';
  @Input() blank: boolean = false;

  target: string = '';

  ngOnInit(): void {
    this.target = this.blank ? '_blank' : '_self';
  }
}
