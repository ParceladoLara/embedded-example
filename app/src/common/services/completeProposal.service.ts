import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import { api } from "../config/api";
import type { CompleteProposalResponseType } from "../types/CompleteProposalResponseType";

export interface CompleteLaraProposalDTO {
  appointment_id: number;
  installments: number;
  firstPaymentDate: string | Date;
}

export function CompleteLaraProposal(): UseMutationResult<
  CompleteProposalResponseType,
  Error,
  CompleteLaraProposalDTO
> {
  return useMutation({
    mutationFn: async (proposal: CompleteLaraProposalDTO) => {
      const { data } = await api.post<CompleteProposalResponseType>(
        "/complete-lara-proposal",
        proposal
      );
      return data;
    },
    networkMode: "always",
  });
}
