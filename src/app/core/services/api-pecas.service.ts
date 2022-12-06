import Pc from './../models/Pecas.model';
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
}
