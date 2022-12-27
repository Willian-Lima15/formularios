import { ConsultaCepService } from './../core/services/consulta-cep.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(
    private consutaCepService: ConsultaCepService
  ) { }

  ngOnInit() {
  }

  cadastrar(form:NgForm){
    console.log(form.controls);

  }

  consultaCep(ev:any, f:NgForm){
    const cep = ev.target.value;
    if(cep !== ''){ //Só vai fazer a consultar se tiver valor no campo cep
      this.consutaCepService.getAllCep(cep).subscribe(res => {
        console.log(res);

        this.dadosEndereco(res, f)
      });
    }
  }

  dadosEndereco(dados:any, form:NgForm){
    form.form.patchValue({
      endereco: dados.logradouro,
      complemento: dados.complemento,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf
    })
  }
}
