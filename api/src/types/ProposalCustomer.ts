import { AddressType } from "./AddressType";

export interface ProposalCustomer {
  id: number;
  name: string;
  cpf: string;
  cellphone: string;
  createdAt: string;
  updatedAt: string;
  isSocialName: boolean;
  dateOfBirth: string | null;
  address?: AddressType;
}
