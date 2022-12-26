import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[maiorIdadeValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MaiorIdadeDirective,
    multi: true
  }]
})
export class MaiorIdadeDirective {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    const dataNascimento = control.value; //pega valor do input data nascimento
    const anoNascimento = new Date(dataNascimento).getFullYear(); //Pega só o ano que foi informado no input
    const anoNascMais18 =  anoNascimento + 18;// recebe o ano de nascimento mais 18 para comparação
    const anoAtual = new Date().getFullYear();//Recebe ano atual para comparar ano informado

    const ehMaior = anoNascMais18 <= anoAtual;// menor ou igual a anoAtual

    return ehMaior ? null : {'maiorIdadeValidator': true}// Se anoNacimentoMais18 menor que ano atual null
  }
  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }

}
