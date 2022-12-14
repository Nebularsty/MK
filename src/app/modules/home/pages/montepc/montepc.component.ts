import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as _ from 'lodash';
import Pc from 'src/app/core/models/Pecas.model';
import { ApiPecasService } from 'src/app/core/services/api-pecas.service';

@Component({
  selector: 'app-montepc',
  templateUrl: './montepc.component.html',
  styleUrls: ['./montepc.component.scss'],
})
export class MontepcComponent implements OnInit {
  respostaPontos = '0';
  computadores: Pc[] = [];
  formulario: FormGroup;
  valorCheckado: any = 0;
  precoDoPc: any = 0;
  valorFinal: number = 0;

  constructor(private apiPecas: ApiPecasService) {
    this.formulario = new FormGroup({
      primeiraCheckBox: new FormControl(false),
      segundaCheckBox: new FormControl(false),
      terceiraCheckBox: new FormControl(false),
      quartaCheckBox: new FormControl(false),
      quintaCheckBox: new FormControl(false),
      sextaCheckBox: new FormControl(false),
      setimaCheckBox: new FormControl(false),
      oitavaCheckBox: new FormControl(false),
      nonaCheckBox: new FormControl(false),
      decimaCheckBox: new FormControl(false),
      decimaPrimeiraCheckBox: new FormControl(false),
      decimaSegundaCheckBox: new FormControl(false),
      decimaTerceiraCheckBox: new FormControl(false),
      decimaQuartaCheckBox: new FormControl(false),
      decimaQuintaCheckBox: new FormControl(false),
    });
  }

  ngOnInit() {
    this.respostaPontos = '0';
    this.listaDeComputadores();
  }

  changeSelect() {
    this.formulario.value.primeiraCheckBox;
    this.formulario.value.segundaCheckBox;
    this.formulario.value.terceiraCheckBox;
    this.formulario.value.quartaCheckBox;
    this.formulario.value.quintaCheckBox;
    this.formulario.value.sextaCheckBox;
    this.formulario.value.setimaCheckBox;
    this.formulario.value.oitavaCheckBox;
    this.formulario.value.nonaCheckBox;
    this.formulario.value.decimaCheckBox;
    this.formulario.value.decimaPrimeiraCheckBox;
    this.formulario.value.decimaSegundaCheckBox;
    this.formulario.value.decimaTerceiraCheckBox;
    this.formulario.value.decimaQuartaCheckBox;
    this.formulario.value.decimaQuintaCheckBox;
  }

  finalizarQuestionario() {
    <HTMLInputElement[]>(
      (<unknown>document.querySelectorAll('.option').forEach((item: any) => {
        if (item.checked) {
          if (parseInt(item.value) > this.valorCheckado) {
            this.valorCheckado = parseInt(item.value);
            console.log(item.value);
            this.resultadoFinalDePontos(item.value);
          }
        }
      }))
    );
    this.finalizarPreco();
  }

  resultadoFinalDePontos(valor: number) {
    this.computadores = _.filter(this.computadores, (pc: any) => {
      console.log(this.valorFinal);
      return pc.ponto == valor;
    });

    console.log(this.computadores); 
  }

  listaDeComputadores() {
    this.apiPecas.obterTodos().subscribe({
      next: (res: any) => this.computadores = res,
      error: (err: any) => console.log(err),
    });

    console.log(this.computadores);
  }

  finalizarPreco() {
    <HTMLInputElement[]>(
      (<unknown>document.querySelectorAll('.preco').forEach((item: any) => {
        if (item.checked) {
          this.precoDoPc = parseInt(item.value);
          console.log(item.value);
          console.log(this.precoDoPc);
        }
      }))
    );
  }
}
