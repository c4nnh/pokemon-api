import { IsNumber, IsOptional, Min } from 'class-validator';

export class PokemonParams {
  @IsOptional()
  @IsNumber()
  @Min(1)
  pageIndex?: number;

  @IsOptional()
  @IsNumber()
  pageSize?: number;
}
