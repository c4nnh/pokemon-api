import { IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class PokemonParams {
  @IsOptional()
  @IsNumber()
  @Min(1)
  offset?: number;

  @IsOptional()
  @IsNumber()
  limit?: number;

  @IsOptional()
  @IsString()
  name?: string;
}
