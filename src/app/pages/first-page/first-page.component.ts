import { Component, Input } from '@angular/core';
import { DATA_TYPE } from 'src/app/enums/enums';
import { FakeDataService } from 'src/app/services/fake-data.service';
import { SharedService } from 'src/app/services/shared.service';
import { Data } from 'src/app/types/types';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss'],
})
export class FirstPageComponent {
  isListView: boolean = true;
  data: Data[] | null = null;
  title: string = '';
  enumValue: any = DATA_TYPE;
  constructor(
    private sharedService: SharedService,
    private fakeDataService: FakeDataService
  ) {}

  isContentVisible() {
    return this.sharedService.isMessageVisible();
  }

  changeListOrGrid() {
    this.isListView = !this.isListView;
  }

  toggleContentVisibility(item: Data) {
    item.isVisible = !item.isVisible;
  }

  ngOnInit() {
    this.fakeDataService.data$.subscribe((data) => {
      this.data = data;
    });
    this.fakeDataService.title$.subscribe((title) => {
      this.title = title;
      console.log('title1', title);
      console.log('title2', this.title);
    });
  }
}
