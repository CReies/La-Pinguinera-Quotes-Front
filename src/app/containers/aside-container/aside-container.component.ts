import { Component } from '@angular/core';
import { AsideComponent } from '../../ui/blocks/aside/aside.component';
import { AsideContainerFacade } from './aside-container.facade';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-aside-container',
  standalone: true,
  imports: [AsideComponent, AsyncPipe],
  templateUrl: './aside-container.component.html',
})
export class AsideContainerComponent {
  public showAside$: Observable<boolean>;

  constructor(private readonly facade: AsideContainerFacade) {}

  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroySubscriptions();
  }

  private initializeSubscriptions(): void {
    this.showAside$ = this.facade.showAside$();
  }
}
