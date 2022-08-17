import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PokemonParams } from './params/pokemon.params';
import { GetPokemonsResponse } from './response/get-pokemons.response';

@Injectable()
export class PokemonsService {
  constructor(private readonly prisma: PrismaService) {}

  get = async (params: PokemonParams): Promise<GetPokemonsResponse> => {
    const take = params.limit || 10;
    const skip = params.offset || 0;

    const [total, pokemons] = await this.prisma.$transaction([
      this.prisma.pokemon.count({
        where: {
          name: {
            contains: params.name,
          },
        },
      }),
      this.prisma.pokemon.findMany({
        skip,
        take,
        where: {
          name: {
            contains: params.name,
          },
        },
      }),
    ]);
    return {
      pokemons,
      total,
      totalPage: Math.ceil(total / take),
    };
  };
}
