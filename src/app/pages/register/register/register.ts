import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Input } from '../../../components/input/input/input';
import { Button } from '../../../components/button/button/button';

@Component({
  imports: [ReactiveFormsModule, Input, Button],
  selector: 'app-register',
  styleUrl: './register.scss',
  templateUrl: './register.html',
})
export class Register {
  protected readonly form = new FormGroup({
    name: new FormControl<string>(''),
    email: new FormControl<string>(''),
    password: new FormControl<string>(''),
    confirmPassword: new FormControl<string>(''),
    check: new FormControl<boolean>(false),
  });
}
