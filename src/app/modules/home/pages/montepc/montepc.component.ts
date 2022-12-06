import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Pc from 'src/app/core/models/Pecas.model';

@Component({
  selector: 'app-montepc',
  templateUrl: './montepc.component.html',
  styleUrls: ['./montepc.component.scss']
})
export class MontepcComponent implements OnInit {
  
  respostaPontos='0'
  computadores: Pc[] =[]
  formulario: FormGroup;
  valorCheckado: any = 0;
 

  constructor() { 
    this.formulario = new FormGroup ({
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
      decimaQuintaCheckBox: new FormControl(false)
      
      
    })


  }


  ngOnInit() {
    this.respostaPontos= '0';
    
    
  }
    
  

  changeSelect(){
    this.formulario.value.primeiraCheckBox
    this.formulario.value.segundaCheckBox
    this.formulario.value.terceiraCheckBox
    this.formulario.value.quartaCheckBox
    this.formulario.value.quintaCheckBox
    this.formulario.value.sextaCheckBox 
    this.formulario.value.setimaCheckBox
    this.formulario.value.oitavaCheckBox
    this.formulario.value.nonaCheckBox
    this.formulario.value.decimaCheckBox
    this.formulario.value.decimaPrimeiraCheckBox
    this.formulario.value.decimaSegundaCheckBox
    this.formulario.value.decimaTerceiraCheckBox
    this.formulario.value.decimaQuartaCheckBox
    this.formulario.value.decimaQuintaCheckBox
    
}

finalizarQuestionario(){
  <HTMLInputElement[]><unknown>document.querySelectorAll('.option').forEach((item: any) => {
    if (item.checked) { 
      if(parseInt(item.value) > this.valorCheckado){
        this.valorCheckado = parseInt(item.value)
        console.log(item.value)
      }

    }
  })
}
}
