import Pecas from '../models/Pecas.model';

export default class PecasMockup {
  constructor() {}

  obter(): Pecas {
    const listaPecas: Pecas = new Pecas(
      0,
      'pc gamer',
      'Pc oficial para jogos',
      '$2000',
      'Pichau'
    );

    return listaPecas;
  }
}
