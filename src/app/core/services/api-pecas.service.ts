import Pecas from './../models/Pecas.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiPecasService {
  constructor(private httpClient: HttpClient) {}

  obterTodos() {
    let response = this.httpClient.get('http://localhost:9999/computadores/');
    response.subscribe((data) => console.log(data));
  }
}
