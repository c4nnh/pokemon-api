import { Pokemon as PPokemon } from '@prisma/client';

export class Pokemon implements PPokemon {
  id: number;
  name: string;
}
