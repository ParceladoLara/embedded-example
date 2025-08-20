import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import { api } from "../config/api";
import type { InitializeProposalResponseType } from "../types/InitializeProposalResponseType";

export interface InitializeLaraProposalDTO {
  appointment_id: number;
}

export function InitializeLaraProposal(): UseMutationResult<
  InitializeProposalResponseType,
  Error,
  InitializeLaraProposalDTO
> {
  return useMutation({
    mutationFn: async (proposal: InitializeLaraProposalDTO) => {
      const { data } = await api.post<InitializeProposalResponseType>(
        "/initialize-lara-proposal",
        proposal
      );
      return data;
    },
    networkMode: "always",
  });
}
