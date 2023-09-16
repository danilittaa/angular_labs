import { Component, Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private sharedService: SharedService) {}

  @Input() userName: string = '';

  handleShowHideMessage() {
    this.sharedService.toggleMessage();
  }
}
