import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoleService } from 'src/app/services/role.service';
import { UserDataService } from 'src/app/services/user-data.service';
import { User } from 'src/app/types/types';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  user: User | null = null;
  role = '';

  constructor(
    private userService: UserDataService,
    private route: ActivatedRoute,
    private roleService: RoleService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const userId = Number(params.get('id'));
      this.user = this.userService.getUserById(userId) as User;
    });
    this.roleService.getRole().subscribe((role) => {
      this.role = role;
    });
  }
}
