import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private showMessage = false;

  toggleMessage() {
    this.showMessage = !this.showMessage;
  }
  isMessageVisible() {
    return this.showMessage;
  }
}
