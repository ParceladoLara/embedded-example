import { ProposalCustomer } from "./ProposalCustomer";

export enum ProposalTypeEnum {
  CreditApplication = "CREDIT_APPLICATION",
  GuarantorCreditApplication = "GUARANTOR_CREDIT_APPLICATION",
  Renegotiation = "RENEGOTIATION",
  ScopeReduction = "SCOPE_REDUCTION",
  SpecialPortfolioRenegotiation = "SPECIAL_PORTFOLIO_RENEGOTIATION",
}

export enum ContractStatus {
  CancellationInProgress = "CANCELLATION_IN_PROGRESS",
  CancellationNegotiated = "CANCELLATION_NEGOTIATED",
  CancellationPendingReimbursement = "CANCELLATION_PENDING_REIMBURSEMENT",
  CancellationRequested = "CANCELLATION_REQUESTED",
  Cancelled = "CANCELLED",
  Delayed = "DELAYED",
  DownPaymentExpired = "DOWN_PAYMENT_EXPIRED",
  DownPaymentHolding = "DOWN_PAYMENT_HOLDING",
  DownPaymentPaid = "DOWN_PAYMENT_PAID",
  Expired = "EXPIRED",
  Ongoing = "ONGOING",
  Paid = "PAID",
  PartiallyDelayed = "PARTIALLY_DELAYED",
  PartiallyPaid = "PARTIALLY_PAID",
  Refused = "REFUSED",
  Renegotiated = "RENEGOTIATED",
  RenegotiationHolding = "RENEGOTIATION_HOLDING",
  Sent = "SENT",
  Signed = "SIGNED",
}

export interface LaraWebhookBody {
  data: {
    id: string;
    status: ContractStatus;
    updatedAt: string;
    createdAt: string;
    contractNumber: string;
    collectionUrl: string;
    emissionCost: number;
    netCreditValue: number;
    signedAt: string | null;
    dueAt: string | null;
    proposal: {
      installments: number;
      firstPaymentDate: string;
      totalIOF: number;
      finalRequestedAmount: number;
      totalAmount: number;
      installmentAmount: number;
      eirYearly: number;
      eirMonthly: number;
      tecYearly: number;
      tecMonthly: number;
      period: number;
      type: ProposalTypeEnum;
      lastPaymentDate: string;
      customer: ProposalCustomer;
      consumer: ProposalCustomer;
    };
    company: {
      name: string;
      documentNumber: string;
    };
    paymentZone: string;
  };
  type: string;
}
