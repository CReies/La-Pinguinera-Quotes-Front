import { Component } from '@angular/core';
import { HeaderContainerComponent } from '../../../containers/header-container/header-container.component';
import { RouterOutlet } from '@angular/router';
import { FooterContainerComponent } from '../../../containers/footer-container/footer-container.component';
import { AsideContainerComponent } from '../../../containers/aside-container/aside-container.component';

@Component({
  selector: 'app-layout-add-book',
  standalone: true,
  imports: [
    HeaderContainerComponent,
    AsideContainerComponent,
    FooterContainerComponent,
    RouterOutlet,
  ],
  templateUrl: './layout-add-book.component.html',
  styleUrl: './layout-add-book.component.css',
})
export class LayoutAddBookComponent {}
