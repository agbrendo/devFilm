import { Component, inject, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  imports: [RouterLink, RouterLinkActive, MatIconModule],
  providers: [AuthService],
  selector: 'app-nav-bar',
  styleUrl: './nav-bar.scss',
  templateUrl: './nav-bar.html',
})
export class NavBar {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  protected logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
