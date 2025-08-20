import type { AddressType } from "./AddressType";
import type { CompanyType } from "./CompanyType";

export interface GetPatientsResponseType {
  name: string;
  id: number;
  cellphone: string;
  cpf: string;
  dateOfBirth: string;
  company_id: number;
  email: string;
  collection_url: string | null;
  address_id: number;
  address?: AddressType;
  company?: CompanyType;
}
