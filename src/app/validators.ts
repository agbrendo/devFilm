import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ValidationError } from '@angular/forms/signals';

export class Validators {
  public static variavelCustomRequired(message?: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value?.trim()) {
        return {
          customRequiredVariavel: { value: message ?? 'Esse campo precisa ser preenchido' },
        };
      }

      return null;
    };
  }

  public static variavelCustomMinLength(min: number, message?: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (value?.trim().length < min) {
        return {
          customMinVariavel: {
            value: message ?? `Esse campo precisa ter no mínimo ${min} caracteres`,
          },
        };
      }

      return null;
    };
  }
}
