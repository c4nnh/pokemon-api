import { ApartmentEntity } from '../entities/apartment.entity';

export class GetApartmentResponse {
  apartments: ApartmentEntity[];
  total: number;
}
