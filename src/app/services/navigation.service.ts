import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Page } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private pages = [
    { label: 'first page', active: true },
    { label: 'second page', active: false },
    { label: 'third page', active: false },
  ];
  private currentPage = new BehaviorSubject<Page[]>(this.pages);

  getPageObservable(): Observable<Page[]> {
    return this.currentPage.asObservable();
  }

  setCurrentPage(page: Page) {
    this.pages.forEach((p) => {
      p.active = false;
      if (p.label === page.label) {
        p.active = true;
      }
    });

    this.currentPage.next(this.pages);
  }
}
