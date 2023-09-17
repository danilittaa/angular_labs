import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../types/types';
import { users } from 'src/assets/data/users';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private users = new BehaviorSubject<User[] | null>(users);
  constructor() {}

  getUsers() {
    return this.users.asObservable();
  }

  getUserById(id: number) {
    return users.find((user) => user.id === id);
  }
}
