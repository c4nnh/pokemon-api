import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PokemonParams } from './params/pokemon.params';
import { GetPokemonsResponse } from './response/get-pokemons.response';

@Injectable()
export class PokemonsService {
  constructor(private readonly prisma: PrismaService) {}

  get = async (params: PokemonParams): Promise<GetPokemonsResponse> => {
    const take = params.pageSize || 10;
    const skip = params.pageIndex ? (params.pageIndex - 1) * take : 0;
    const [total, pokemons] = await this.prisma.$transaction([
      this.prisma.pokemon.count(),
      this.prisma.pokemon.findMany({
        skip,
        take,
      }),
    ]);
    return {
      pokemons,
      total,
      totalPage: Math.ceil(total / params.pageSize || 10),
    };
  };
}
