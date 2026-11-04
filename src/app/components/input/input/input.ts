import { Component, DestroyRef, inject, input, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-input',
  styleUrl: './input.scss',
  templateUrl: './input.html',
})
export class Input implements OnInit {
  private readonly destroyRef = inject(DestroyRef);

  public readonly inputLabel = input.required<string>();
  public readonly inputPlaceHolder = input.required<string>();
  public readonly inputType = input<string>('text');
  public readonly inputControl = input.required<FormControl>();

  protected readonly error = signal<string | undefined>(undefined);

  ngOnInit(): void {
    this.inputControl()
      .valueChanges.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.verifyError());
  }

  protected verifyError() {
    const keys = Object.keys(this.inputControl().errors ?? {});
    const messageError = keys.reduce((previus, current) => {
      if (previus) return previus;
      const errorMessage = this.inputControl().errors?.[current];
      return errorMessage.value;
    }, '');
    this.error.set(messageError);
  }
}
