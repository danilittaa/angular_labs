import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { UsersComponent } from './pages/users/users.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ROLES } from './enums/roles.enum';
import { rolesGuard } from './guards/roles.guard';

const routes: Routes = [
  {
    path: 'first-page',
    component: FirstPageComponent,
    canActivate: [rolesGuard([ROLES.USER, ROLES.ADMIN, ROLES.OWNER])],
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [rolesGuard([ROLES.ADMIN, ROLES.OWNER])],
  },
  {
    path: 'users/:id',
    component: UserDetailsComponent,
    canActivate: [rolesGuard([ROLES.OWNER])],
  },
  { path: '', redirectTo: '/first-page', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
