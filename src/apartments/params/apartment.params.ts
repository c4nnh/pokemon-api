import { IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class ApartmentParams {
  @IsOptional()
  @IsNumber()
  @Min(1)
  pageNumber?: number = 1;

  @IsOptional()
  @IsNumber()
  pageSize?: number = 10;

  @IsOptional()
  @IsString()
  searchText?: string;
}
