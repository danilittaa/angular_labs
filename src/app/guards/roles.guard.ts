import { CanActivateFn } from '@angular/router';

import { ROLES } from '../enums/roles.enum';

export const rolesGuard = (requiredRoles: ROLES[]): CanActivateFn => {
  const guard: CanActivateFn = () => {
    const currentRole = localStorage.getItem('role') ?? ROLES.USER;

    return requiredRoles.includes(
      currentRole ? (JSON.parse(currentRole as ROLES) as ROLES) : ROLES.USER
    );
  };
  return guard;
};
