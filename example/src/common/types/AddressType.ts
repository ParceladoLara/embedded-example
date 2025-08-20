export interface AddressType {
  zip: string;
  city: string;
  number: string;
  state: string;
  region?: string;
  complement: string | null;
  street: string;
  country: {
    id: number;
  };
}
