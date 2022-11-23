import Pecas from './../models/Pecas.model';
import { API_PATH } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiPecasService {
  constructor(private httpClient: HttpClient) {}

  obterTodos() {
    return this.httpClient.get<Pecas[]>(`${API_PATH}Carro`).toPromise();
    //Carros é o End Point da minha API
  }
}
