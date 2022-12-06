import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiPecasService {
  constructor(private httpClient: HttpClient) {}

  obterTodos() {
    return this.httpClient.get('http://localhost:9999/computadores/');
  }

  obterPlacasDeVideo() {
    return this.httpClient.get('http://localhost:9999/placaDeVideo/');
  }

  obterProcessadores() {
    return this.httpClient.get('http://localhost:9999/processador/');
  }
}
