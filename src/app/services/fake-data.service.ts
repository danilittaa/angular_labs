import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Data } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class FakeDataService {
  private fakeData = new BehaviorSubject<Data[] | null>(null);
  data$ = this.fakeData.asObservable();

  private title = new BehaviorSubject<string>('');
  title$ = this.title.asObservable();

  constructor() {}

  setFakeData(data: Data[]) {
    this.fakeData.next(data);
  }

  setTitle(title: string) {
    console.log('title', title);

    this.title.next(title);
  }
}
