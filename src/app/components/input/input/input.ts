import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-input',
  styleUrl: './input.scss',
  templateUrl: './input.html',
})
export class Input {
  public readonly inputLabel = input.required<string>();
  public readonly inputPlaceHolder = input.required<string>();
  public readonly inputType = input<string>('text');

  public readonly inputControl = input.required<FormControl>();
}
