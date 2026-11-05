import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-button',
  styleUrl: './button.scss',
  templateUrl: './button.html',
})
export class Button {
  public readonly isLoading = input<boolean>();
  public readonly onClick = output<void>();

  public readonly textButton = input.required<string>();
  public readonly isButtonEnable = input.required<boolean>();
}
