import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TitleComponent } from '../../elements/title/title.component';
import { IAuthResponseModel } from '../../../core/models/auth-response.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() userData: IAuthResponseModel;
  @Output() onLogout: EventEmitter<void> = new EventEmitter<void>();

  logout(): void {
    this.onLogout.emit();
  }
}
