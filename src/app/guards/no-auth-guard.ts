import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { CacheService } from '../services/cache-service/cache.service';

export const noAuthGuard: CanMatchFn = () => {
  const cacheService = inject(CacheService);
  const route = inject(Router);

  const user = cacheService.getUser();

  if (user) {
    route.navigateByUrl('/');
    return false;
  }
  return true;
};
