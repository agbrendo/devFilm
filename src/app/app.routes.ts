import { Routes } from '@angular/router';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { authGuard } from './guards/auth-guard';
import { CacheService } from './services/cache-service/cache.service';
import { noAuthGuard } from './guards/no-auth-guard';
import { Movies } from './pages/movies/movies';
import { MyList } from './pages/my-list/my-list';

export const routes: Routes = [
  {
    path: 'cadastro',
    component: Register,
    providers: [CacheService],
    canMatch: [noAuthGuard],
  },
  {
    path: 'login',
    component: Login,
    providers: [CacheService],
    canMatch: [noAuthGuard],
  },
  {
    path: '',
    component: Home,
    providers: [CacheService],
    canMatch: [authGuard],
    children: [
      {
        path: '',
        component: Movies,
      },
      {
        path: 'my-list',
        component: MyList,
      },
    ],
  },
];
