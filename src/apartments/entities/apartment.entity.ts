import { Apartment as PApartment } from '@prisma/client';

export class ApartmentEntity implements PApartment {
  id: string;
  name: string;
  furniture: string;
  viewDirection: string;
  project: string;
  division: string;
  building: string;
  inOutDate: Date;
  floor: string;
  defaultPrice: number;
  deposit: string;
  paymentPeriod: string;
}
