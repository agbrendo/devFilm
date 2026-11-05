import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Input } from '../../components/input/input/input';
import { Button } from '../../components/button/button/button';
import { Validators } from '../../validators';
import { Router, RouterLink } from '@angular/router';
import { IPayloadUser } from '../../services/auth-service/auth.model';
import { AuthService } from '../../services/auth-service/auth.service';
import { CacheService } from '../../services/cache-service/cache.service';

@Component({
  imports: [ReactiveFormsModule, Input, Button, RouterLink],
  providers: [AuthService, CacheService],
  selector: 'app-register',
  styleUrl: './register.scss',
  templateUrl: './register.html',
})
export class Register {
  private readonly authServices = inject(AuthService);
  private readonly cacheService = inject(CacheService);
  private readonly router = inject(Router);

  protected readonly isLoading = signal<boolean>(false);

  protected readonly form = new FormGroup({
    name: new FormControl<string>('', {
      validators: [
        Validators.variavelCustomRequired('O nome precisa ser preenchido'),
        Validators.variavelCustomMinLength(5, 'Deve ter no mínimo 5 caracteres'),
      ],
      nonNullable: true,
    }),
    email: new FormControl<string>('', {
      validators: [
        Validators.variavelCustomRequired('O email precisa ser preenchido'),
        Validators.variavelCustomMinLength(5, 'Deve ter no mínimo 5 caracteres'),
      ],
      nonNullable: true,
    }),
    password: new FormControl<string>('', {
      validators: [
        Validators.variavelCustomRequired('O password precisa ser preenchido'),
        Validators.variavelCustomMinLength(5, 'Deve ter no mínimo 5 caracteres'),
      ],
      nonNullable: true,
    }),
    confirmPassword: new FormControl<string>('', {
      validators: [
        Validators.variavelCustomRequired('Comfirme a senha digitada'),
        Validators.variavelCustomMinLength(5, 'Deve ter no mínimo 5 caracteres'),
      ],
    }),
    check: new FormControl<boolean>(false),
  });

  protected creatUser() {
    const payload: IPayloadUser = {
      name: this.form.controls.name.value,
      email: this.form.controls.email.value,
      password: this.form.controls.password.value,
    };

    this.isLoading.set(true);
    this.authServices.creatUserHttp(payload).subscribe((value) => {
      this.cacheService.saveUser(value);
      this.isLoading.set(false);
      this.router.navigateByUrl('/');
    });
  }
}
