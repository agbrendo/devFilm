import { Component, DestroyRef, inject, signal } from '@angular/core';
import { Input } from '../../components/input/input/input';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ɵInternalFormsSharedModule,
} from '@angular/forms';
import { Button } from '../../components/button/button/button';
import { Validators } from '../../validators';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service/auth.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CacheService } from '../../services/cache-service/cache.service';

@Component({
  imports: [Input, ReactiveFormsModule, Button],
  providers: [AuthService, CacheService],
  selector: 'app-login',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class Login {
  private readonly authServices = inject(AuthService);
  private readonly cacheService = inject(CacheService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly hasError = signal<boolean>(false);
  protected readonly isLoading = signal<boolean>(false);

  protected readonly form = new FormGroup({
    email: new FormControl<string>('', {
      validators: [
        Validators.variavelCustomRequired('Preencha com seu nome de usuario ou email'),
        Validators.variavelCustomMinLength(5, 'Deve conter no mínimo 5 caracteres'),
      ],
    }),
    password: new FormControl<string>('', {
      validators: [Validators.variavelCustomRequired('O password precisa ser preenchido')],
    }),
  });

  protected login() {
    const { email, password } = this.form.value;

    if (!email?.trim()) return;

    this.isLoading.set(true);
    this.authServices
      .getUserHttp(email)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => {
        if (password === value?.password && value) {
          this.cacheService.saveUser(value);

          this.router.navigateByUrl('/');
          return;
        }

        this.hasError.set(true);
      })
      .add(() => this.isLoading.set(false));
  }
}
