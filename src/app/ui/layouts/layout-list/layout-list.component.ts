import { Component } from '@angular/core';
import { HeaderContainerComponent } from '../../../containers/header-container/header-container.component';
import { AsideContainerComponent } from '../../../containers/aside-container/aside-container.component';
import { FooterContainerComponent } from '../../../containers/footer-container/footer-container.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-list',
  standalone: true,
  imports: [HeaderContainerComponent, AsideContainerComponent,  FooterContainerComponent, RouterOutlet],
  templateUrl: './layout-list.component.html',
  styleUrl: './layout-list.component.css'
})
export class LayoutListComponent {

}
