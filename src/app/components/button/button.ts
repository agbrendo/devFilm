import { Component, input } from '@angular/core';
import { Input } from '../input/input';

@Component({
  imports: [],
  selector: 'app-button',
  styleUrl: './button.scss',
  templateUrl: './button.html',
})
export class Button {
  public readonly textButton = input.required<string>();
  public readonly IsButtonEnable = input.required<boolean>();
}
