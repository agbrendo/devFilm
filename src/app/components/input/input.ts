import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-input',
  styleUrl: './input.scss',
  templateUrl: './input.html',
})
export class Input {
  public readonly label = input.required<string>();
  public readonly placeHolder = input.required<string>();
  public readonly type = input<string>('text');
}
