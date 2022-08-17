import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonsModule } from './pokemons/pokemons.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PokemonsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
