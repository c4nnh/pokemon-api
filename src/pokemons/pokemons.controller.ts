import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PokemonParams } from './params/pokemon.params';
import { PokemonsService } from './pokemons.service';
import { GetPokemonsResponse } from './response/get-pokemons.response';

@Controller('pokemons')
@ApiTags('Pokemon')
export class PokemonsController {
  constructor(private readonly service: PokemonsService) {}

  @Get()
  get(@Query() params: PokemonParams): Promise<GetPokemonsResponse> {
    return this.service.get(params);
  }
}
