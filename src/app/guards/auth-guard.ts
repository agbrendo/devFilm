import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { CacheService } from '../services/cache-service/cache.service';

export const authGuard: CanMatchFn = () => {
  const cacheService = inject(CacheService);
  const router = inject(Router);

  const user = cacheService.getUser();

  if (!user) {
    router.navigateByUrl('/login');
    return false;
  }
  return true;
};
