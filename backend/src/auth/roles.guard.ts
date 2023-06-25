import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from './role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    console.log(user);
    const userRoles = [];
    userRoles.push('anon');

    if (user.role === 'regular')
        userRoles.push('regular')

    if (user.role === 'moderator'){
        userRoles.push('regular')
        userRoles.push('moderator');
    }

    if (user.role === 'admin'){
        userRoles.push('regular')
        userRoles.push('moderator');
        userRoles.push('admin');
    }

    return requiredRoles.some((role) => userRoles.includes(role));
  }
}
