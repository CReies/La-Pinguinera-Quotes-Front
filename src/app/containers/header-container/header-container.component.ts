import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderComponent } from '../../ui/blocks/header/header.component';
import { Observable } from 'rxjs';
import { IAuthResponseModel } from '../../core/models/auth-response.model';
import { HeaderContainerFacade } from './header-container.facade';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header-container',
  standalone: true,
  imports: [HeaderComponent, AsyncPipe],
  templateUrl: './header-container.component.html',
})
export class HeaderContainerComponent implements OnInit, OnDestroy {
  public userData$: Observable<IAuthResponseModel>;

  constructor(private readonly facade: HeaderContainerFacade) {}

  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroySubscriptions();
  }

  logout(): void {
    this.facade.logout();
  }

  toggleAside(show: boolean): void {
    this.facade.toggleAside(show);
  }

  private initializeSubscriptions(): void {
    this.userData$ = this.facade.userData$();
  }
}
