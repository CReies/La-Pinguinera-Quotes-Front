import { Component } from '@angular/core';
import { HeaderContainerComponent } from '../../../containers/header-container/header-container.component';
import { RouterOutlet } from '@angular/router';
import { FooterContainerComponent } from '../../../containers/footer-container/footer-container.component';
import { AsideContainerComponent } from '../../../containers/aside-container/aside-container.component';

@Component({
  selector: 'app-layout-main',
  standalone: true,
  imports: [
    HeaderContainerComponent,
    AsideContainerComponent,
    FooterContainerComponent,
    RouterOutlet,
  ],
  templateUrl: './layout-main.component.html',
  styleUrl: './layout-main.component.css',
})
export class LayoutMainComponent {}
