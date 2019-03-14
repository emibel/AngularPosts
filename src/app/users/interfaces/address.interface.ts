import { IGeo } from './geo.interface';

export interface IAddress {
  street: string;
  suitre: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}
