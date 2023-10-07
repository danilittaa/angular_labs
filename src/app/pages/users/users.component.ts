import { Component } from '@angular/core';
import { RoleService } from 'src/app/services/role.service';
import { UserDataService } from 'src/app/services/user-data.service';
import { User } from 'src/app/types/types';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  users: User[] = [];
  role = '';

  constructor(
    private userDataService: UserDataService,
    private roleService: RoleService
  ) {}

  ngOnInit() {
    this.userDataService.getUsers().subscribe((users) => {
      this.users = users as User[];
    });
    this.roleService.getRole().subscribe((role) => {
      this.role = role;
    });
  }
}
