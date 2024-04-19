import { Component } from '@angular/core';
import { HeaderContainerComponent } from '../../../containers/header-container/header-container.component';
import { RouterOutlet } from '@angular/router';
import { FooterContainerComponent } from '../../../containers/footer-container/footer-container.component';

@Component({
  selector: 'app-layout-auth',
  standalone: true,
  imports: [HeaderContainerComponent, FooterContainerComponent, RouterOutlet],
  templateUrl: './layout-auth.component.html',
  styleUrl: './layout-auth.component.css',
})
export class LayoutAuthComponent {}
