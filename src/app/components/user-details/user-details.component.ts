import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data.service';
import { User } from 'src/app/types/types';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  user: User | null = null;

  constructor(
    private userService: UserDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const userId = Number(params.get('id'));
      this.user = this.userService.getUserById(userId) as User;
    });
  }
}
