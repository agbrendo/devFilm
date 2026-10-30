import { Component, OnInit } from '@angular/core';
import { Input } from '../../components/input/input';
import { Button } from '../../components/button/button';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '../../validators';

@Component({
  imports: [Input, Button, ReactiveFormsModule],
  selector: 'app-register',
  styleUrl: './register.scss',
  templateUrl: './register.html',
})
export class Register implements OnInit {
  ngOnInit(): void {
    this.form.valueChanges.subscribe((value) => {
      (console.log('check', value.check),
        console.log('confirmPassword', value.confirmPassword),
        console.log('email', value.email),
        console.log('name', value.name),
        console.log('password', value.password));
    });
  }
  protected readonly form = new FormGroup({
    name: new FormControl<string>('', [Validators.validatorNameCompleted()]),
    email: new FormControl<string>(''),
    password: new FormControl<string>(''),
    confirmPassword: new FormControl<string>(''),
    check: new FormControl<boolean>(false),
  });
}
