export default class Pecas {
  id: number;
  nomePc: string;
  info: string;
  preco: string;
  marca: string;

  constructor(
    id: number,
    nomePc: string,
    info: string,
    preco: string,
    marca: string
  ) {
    this.id = id;
    this.nomePc = nomePc;
    this.info = info;
    this.preco = preco;
    this.marca = marca;
  }
}
