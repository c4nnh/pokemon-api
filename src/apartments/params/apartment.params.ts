import { IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class ApartmentParams {
  @IsOptional()
  @IsNumber()
  @Min(0)
  pageNumber?: number = 0;

  @IsOptional()
  @IsNumber()
  pageSize?: number = 10;

  @IsOptional()
  @IsString()
  searchText?: string;
}
