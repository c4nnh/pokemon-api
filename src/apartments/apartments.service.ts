import { faker } from '@faker-js/faker';
import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
import { CreateApartmentsDto } from './dto/create-apartments.dto';
import { ApartmentParams } from './params/apartment.params';
import { GetApartmentResponse } from './response/get-apartments.response';

@Injectable()
export class ApartmentsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
  ) {}

  getMany = async (query: ApartmentParams): Promise<GetApartmentResponse> => {
    const { searchText, pageNumber, pageSize: take } = query;
    const skip = pageNumber * take;

    const where = {
      name: {
        contains: searchText,
      },
    };

    const [total, apartments] = await this.prisma.$transaction([
      this.prisma.apartment.count({ where }),
      this.prisma.apartment.findMany({
        where,
        skip,
        take,
      }),
    ]);

    return {
      apartments,
      total,
    };
  };

  private getRandomFurniture = (value: number) => {
    switch (value) {
      case 0:
        return 'No';
      case 1:
        return 'Middle';
      case 2:
      default:
        return 'Full';
    }
  };

  createMany = async (dto: CreateApartmentsDto): Promise<boolean> => {
    const { passwordToCreate, quantity } = dto;
    const password = this.config.get<string>('PASSWORD_TO_CREATE');
    if (!password) {
      throw new InternalServerErrorException(
        'Your server does not have password',
      );
    }
    if (password !== passwordToCreate) {
      throw new UnauthorizedException('Your password is incorrect');
    }
    await this.prisma.apartment.createMany({
      data: [...Array(quantity).keys()].map(() => ({
        name: faker.name.fullName(),
        furniture: this.getRandomFurniture(Math.floor(Math.random() * 2)),
        viewDirection: faker.name.lastName(),
        project: faker.company.name(),
        division: faker.name.firstName(),
        building: faker.company.name(),
        inOutDate: faker.date.recent(),
        floor: `Floor ${Math.floor(Math.random() * (30 - 1) + 1)}`,
        defaultPrice: Math.floor(
          Math.random() * (5000000000 - 500000000) + 500000000,
        ),
        deposit: faker.name.fullName(),
        paymentPeriod: faker.name.fullName(),
      })),
    });
    return true;
  };
}
