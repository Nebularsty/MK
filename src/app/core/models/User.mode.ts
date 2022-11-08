export class User {
  nome: string;
  nick: string;
  telefone: string;
  dataNascimento: string;
  email: string;
  constructor(
    nome: string,
    nick: string,
    telefone: string,
    dataNascimento: string,
    email: string
  ) {
    this.nome = nome;
    this.nick = nick;
    this.telefone = telefone;
    this.dataNascimento = dataNascimento;
    this.email = email;
  }
}
