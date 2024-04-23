import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TitleComponent } from '../../elements/title/title.component';
import { IAuthResponseModel } from '../../../core/models/auth-response.model';
import { SvgComponent } from '../../elements/svg/svg.component';
import { AnchorComponent } from '../../elements/anchor/anchor.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SvgComponent, AnchorComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() userData: IAuthResponseModel;
  @Output() onLogout: EventEmitter<void> = new EventEmitter<void>();
  @Output() onShowAside: EventEmitter<boolean> = new EventEmitter<boolean>(
    false
  );

  closeMenuDisabled: boolean = true;

  logout(): void {
    this.onLogout.emit();
  }

  toggleAside(): void {
    this.closeMenuDisabled = !this.closeMenuDisabled;
    this.onShowAside.emit(this.closeMenuDisabled);
  }
}
