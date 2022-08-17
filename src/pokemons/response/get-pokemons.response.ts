import { Pokemon } from '../entities/pokemon.entity';

export class GetPokemonsResponse {
  totalPage: number;
  total: number;
  pokemons: Pokemon[];
}
