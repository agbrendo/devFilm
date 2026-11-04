import { Component } from '@angular/core';
import { Input } from '../../components/input/input/input';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ɵInternalFormsSharedModule,
} from '@angular/forms';
import { Button } from '../../components/button/button/button';
import { Validators } from '../../validators';
import { RouterLink } from '@angular/router';

@Component({
  imports: [Input, ReactiveFormsModule, Button, RouterLink],
  selector: 'app-login',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class Login {
  protected readonly form = new FormGroup({
    nameEmail: new FormControl<string>('', {
      validators: [
        Validators.variavelCustomRequired('Preencha com seu nome de usuario ou email'),
        Validators.variavelCustomMinLength(5, 'Deve conter no mínimo 5 caracteres'),
      ],
    }),
    password: new FormControl<string>('', {
      validators: [
        Validators.variavelCustomRequired('O password precisa ser preenchido'),
        Validators.variavelCustomMinLength(5, 'Deve ter no mínimo 5 caracteres'),
      ],
    }),
  });
}
