import { type ProposalCustomer } from "./ProposalCustomer";
import { ProposalStatus } from "./ProposalStatus";

export interface InitializeProposalResponseType {
  id: string;
  approvedAmount: number;
  finalRequestedAmount: number;
  expiresAt: string;
  firstPaymentDate: string | null;
  status: ProposalStatus;
  requestedAmount: number;
  installments: number | null;
  createdAt: string;
  updatedAt: string;
  customer: ProposalCustomer;
  consumer: ProposalCustomer;
  customerInterestRate: number;
}
