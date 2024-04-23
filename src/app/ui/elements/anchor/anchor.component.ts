import { Component, Input, ViewChild } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-anchor',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './anchor.component.html',
  styleUrl: './anchor.component.css',
})
@ViewChild
export class AnchorComponent {
  @Input() href: string = '';
  @Input() text: string = '';
  @Input() blank: boolean = false;

  target: string = '';
  innerHref: boolean = false;

  ngOnInit(): void {
    this.target = this.blank ? '_blank' : '_self';

    this.href.startsWith('http')
      ? (this.innerHref = false)
      : (this.innerHref = true);
  }
}
