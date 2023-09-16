import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { Page } from 'src/app/types/types';

@Component({
  selector: 'app-left-nav-bar',
  templateUrl: './left-nav-bar.component.html',
  styleUrls: ['./left-nav-bar.component.scss'],
})
export class LeftNavBarComponent {
  pages: Page[] = [];

  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
    this.navigationService.getPageObservable().subscribe((pages) => {
      this.pages = pages;
    });
  }

  setActivePage(page: Page) {
    this.navigationService.setCurrentPage(page);
  }
}
