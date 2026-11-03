import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-button',
  styleUrl: './button.scss',
  templateUrl: './button.html',
})
export class Button {
  public readonly textButton = input.required<string>();
  public readonly isButtonEnable = input.required<boolean>();
}
