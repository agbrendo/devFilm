import { Component } from '@angular/core';
import { Input } from '../../components/input/input';

@Component({
  imports: [Input],
  selector: 'app-register',
  styleUrl: './register.scss',
  templateUrl: './register.html',
})
export class Register {}
