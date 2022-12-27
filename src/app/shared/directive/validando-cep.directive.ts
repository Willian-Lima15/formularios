import { ConsultaCepService } from './../../core/services/consulta-cep.service';
import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[validadorCep]',
  providers:[{
    provide: NG_ASYNC_VALIDATORS,
    useExisting:ValidandoCepDirective,
    multi:true
  }]
})
export class ValidandoCepDirective implements AsyncValidator{

  constructor(
    private consultaCepService:ConsultaCepService
  ) { }
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const cep = control.value;// recebe o valor do input CEP
    return this.consultaCepService.getAllCep(cep).pipe(map((res:any) => res.erro ? {'validadorCep':true} : null))// Se o cep for errado, retorna validadorCep: true, caso seja falso retorna null
  }
  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }

}
