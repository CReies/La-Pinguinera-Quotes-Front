import { Component } from '@angular/core';
import { AnchorComponent } from '../../elements/anchor/anchor.component';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [AnchorComponent],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css',
})
export class AsideComponent {
  links: ILink[] = [
    {
      name: 'Home',
      url: '/quotes/home',
    },
    {
      name: 'Create Book',
      url: '/quotes/create-book',
    },
    {
      name: 'List',
      url: '/quotes/list',
    },
    {
      name: 'Budget',
      url: '/quotes/budget',
    },
  ];
}

interface ILink {
  name: string;
  url: string;
}
