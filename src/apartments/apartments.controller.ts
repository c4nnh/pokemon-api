import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApartmentsService } from './apartments.service';
import { CreateApartmentsDto } from './dto/create-apartments.dto';
import { ApartmentParams } from './params/apartment.params';
import { GetApartmentResponse } from './response/get-apartments.response';

@Controller('cms/v1/leasing/apartments')
@ApiTags('Apartment')
export class ApartmentsController {
  constructor(private readonly service: ApartmentsService) {}

  @Get()
  get(@Query() query: ApartmentParams): Promise<GetApartmentResponse> {
    return this.service.getMany(query);
  }

  @Post('create-many')
  createMany(@Body() dto: CreateApartmentsDto): Promise<boolean> {
    return this.service.createMany(dto);
  }
}
