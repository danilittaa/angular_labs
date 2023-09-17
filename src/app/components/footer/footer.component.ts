import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { Page } from 'src/app/types/types';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
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
