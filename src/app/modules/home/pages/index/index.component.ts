import { ApiPecasService } from './../../../../core/services/api-pecas.service';
import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import PecasMockup from 'src/app/core/mock/Pecas.mock';
import Pecas from 'src/app/core/models/Pecas.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  private listaPecasmockup: PecasMockup = new PecasMockup();
  public pecas: any;

  constructor(
    private fire: FirestoreService,
    private apiPecas: ApiPecasService
  ) {
    this.pecas = this.listaPecasmockup.obter();
    console.log(this.pecas);
  }

  ngOnInit(): void {}

  obterPecas() {
    this.apiPecas.obterTodos().then((res) => console.log(res));
  }

  obterlistaPecas() {}
}
