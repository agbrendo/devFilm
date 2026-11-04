import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Input } from '../../components/input/input/input';
import { Button } from '../../components/button/button/button';
import { Validators } from '../../validators';
import { RouterLink } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule, Input, Button, RouterLink],
  selector: 'app-register',
  styleUrl: './register.scss',
  templateUrl: './register.html',
})
export class Register implements OnInit {
  protected readonly form = new FormGroup({
    name: new FormControl<string>('', {
      validators: [
        Validators.variavelCustomRequired('O nome precisa ser preenchido'),
        Validators.variavelCustomMinLength(5, 'Deve ter no mínimo 5 caracteres'),
      ],
    }),
    email: new FormControl<string>('', {
      validators: [
        Validators.variavelCustomRequired('O email precisa ser preenchido'),
        Validators.variavelCustomMinLength(5, 'Deve ter no mínimo 5 caracteres'),
      ],
    }),
    password: new FormControl<string>('', {
      validators: [
        Validators.variavelCustomRequired('O password precisa ser preenchido'),
        Validators.variavelCustomMinLength(5, 'Deve ter no mínimo 5 caracteres'),
      ],
    }),
    confirmPassword: new FormControl<string>('', {
      validators: [
        Validators.variavelCustomRequired('Comfirme a senha digitada'),
        Validators.variavelCustomMinLength(5, 'Deve ter no mínimo 5 caracteres'),
      ],
    }),
    check: new FormControl<boolean>(false),
  });

  ngOnInit(): void {
    this.form.valueChanges.subscribe(() => console.log(this.form.controls.name.errors));
  }
}
