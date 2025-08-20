export interface InitializeProposalBodyType {
  requestedAmount: number;
  customer: {
    cpf: string;
    name: string;
    cellphone: string;
    isSocialName: boolean;
  };
}
