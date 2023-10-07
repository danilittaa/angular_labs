import { Component } from '@angular/core';
import { ROLES } from 'src/app/enums/enums';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss'],
})
export class FirstPageComponent {
  roles = Object.values(ROLES);
  role = '';
  constructor(private roleService: RoleService) {}

  changeRole(role: ROLES) {
    this.roleService.setRole(role);
  }

  ngOnInit() {
    this.roleService.getRole().subscribe((role) => {
      this.role = role;
    });
  }
}
