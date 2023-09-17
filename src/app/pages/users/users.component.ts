import { Component } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { User } from 'src/app/types/types';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  users: User[] = [];

  constructor(private userDataService: UserDataService) {}

  ngOnInit() {
    return this.userDataService.getUsers().subscribe((users) => {
      this.users = users as User[];
    });
  }
}
