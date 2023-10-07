import { Component, Input } from '@angular/core';
import { RoleService } from 'src/app/services/role.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public role = '';
  constructor(
    private sharedService: SharedService,
    private roleService: RoleService
  ) {}

  @Input() userName: string = '';

  handleShowHideMessage() {
    this.sharedService.toggleMessage();
  }

  ngOnInit() {
    this.roleService.getRole().subscribe((role) => {
      this.role = role;
    });
  }
}
