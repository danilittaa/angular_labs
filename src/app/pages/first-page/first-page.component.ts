import { Component, Input } from '@angular/core';
import { DATA_TYPE } from 'src/app/enums/enums';
import { SharedService } from 'src/app/services/shared.service';
import { Data } from 'src/app/types/types';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss'],
})
export class FirstPageComponent {
  isListView: boolean = true;
  constructor(private sharedService: SharedService) {}

  @Input() title: string = '';
  @Input() data: Data[] = [];
  @Input() enumValue: typeof DATA_TYPE = DATA_TYPE;

  isContentVisible() {
    return this.sharedService.isMessageVisible();
  }

  changeListOrGrid() {
    this.isListView = !this.isListView;
  }

  toggleContentVisibility(item: Data) {
    item.isVisible = !item.isVisible;
  }
}
