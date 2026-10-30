import { AbstractControl, ValidationErrors } from '@angular/forms';

export class Validators {
  public static validatorNameCompleted() {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (!value.trim()) {
        return {
          nameCompleted: { value: 'O nome e obrigatório' },
        };
      }
      if (value.trim().length < 11) {
        return {
          nameCompleted: { value: 'O nome precisa no mínimo 11 caracteres' },
        };
      }
      return null;
    };
  }
}
