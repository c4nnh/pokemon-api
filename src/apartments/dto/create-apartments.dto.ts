import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export class CreateApartmentsDto {
  @IsString()
  @IsNotEmpty()
  passwordToCreate: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  quantity?: number = 10;
}
