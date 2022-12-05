import { ApiPecasService } from './../../../../core/services/api-pecas.service';
import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import Pecas from 'src/app/core/models/Pecas.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  public pecas: any;

  constructor(
    private fire: FirestoreService,
    private apiPecas: ApiPecasService
  ) {
    console.log(this.pecas);
  }

  ngOnInit() {
    this.obterPecas();
  }

  obterPecas() {
    this.apiPecas.obterTodos();
  }

  obterlistaPecas() {}
}
