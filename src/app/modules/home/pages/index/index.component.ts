import { forEach } from 'lodash';
import { ApiPecasService } from './../../../../core/services/api-pecas.service';
import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import Pc from 'src/app/core/models/Pecas.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  public pcs: any;
  public placaDeVideo: any;
  public processadores: any;

  constructor(
    private fire: FirestoreService,
    private apiPecas: ApiPecasService
  ) {
    console.log(this.pcs);
  }

  ngOnInit() {
    this.obterPecas();
    console.log(this.pcs);
  }

  obterPecas() {

    this.apiPecas.obterTodos().subscribe({
      next: (res: any) => (this.pcs = res),      
      error: (err: any) => console.log(err),
    })
    console.log(this.pcs);
    ;


    this.apiPecas.obterPlacasDeVideo().subscribe({
      next: (res: any) => (this.placaDeVideo = res),
      error: (err: any) => console.log(err),
    });

    this.apiPecas.obterProcessadores().subscribe({
      next: (res: any) => (this.processadores = res),
      error: (err: any) => console.log(err),
    });
  }

  obterlistaPecas() {}
}
