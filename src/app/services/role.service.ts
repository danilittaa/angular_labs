import { Injectable } from '@angular/core';
import { ROLES } from '../enums/enums';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private roleSubject = new BehaviorSubject<ROLES>(
    localStorage.getItem('role')
      ? JSON.parse(localStorage.getItem('role') as string)
      : ROLES.USER
  );

  setRole(role: ROLES) {
    this.roleSubject.next(role);
    localStorage.setItem('role', JSON.stringify(role));
  }

  getRole() {
    return this.roleSubject.asObservable();
  }
}
