import {
  type Icon,
  IconMoodAnnoyed,
  IconMoodEmpty,
  IconMoodSmileBeam,
} from "@tabler/icons-react";
import { ProposalStatus } from "../types/ProposalStatus";

interface GetProposalResultInfosByStatusReturnType {
  color: string;
  title: string;
  Icon: Icon;
  subtitle?: string;
  buttonText: string;
}

export function getProposalResultInfosByStatus(
  status?: ProposalStatus
): GetProposalResultInfosByStatusReturnType {
  switch (status) {
    case ProposalStatus.Approved:
      return {
        color: "text-green-700",
        title: "Crédito aprovado!",
        Icon: IconMoodSmileBeam,
        buttonText: "Escolher parcelas",
      };

    case ProposalStatus.Denied:
      return {
        color: "text-red-700",
        title: "Crédito Recusado",
        Icon: IconMoodAnnoyed,
        subtitle:
          "A análise de crédito para este cliente não resultou em aprovação no momento.",
        buttonText: "Voltar a Pedidos",
      };

    case ProposalStatus.Refused:
      return {
        color: "text-red-700",
        title: "Proposta Recusada",
        Icon: IconMoodAnnoyed,
        subtitle:
          "Após análise e revisão, o cliente optou por não prosseguir com a proposta apresentada.",
        buttonText: "Voltar a Pedidos",
      };

    case ProposalStatus.InconsistentData:
      return {
        color: "text-orange-700",
        title: "Dados Inconsistentes",
        Icon: IconMoodEmpty,
        subtitle:
          "Foram encontrados dados inconsistentes no nome do cliente, por favor, verifique se está digitado corretamente.",
        buttonText: "Verificar dados",
      };

    case ProposalStatus.Expired:
      return {
        color: "text-red-700",
        title: "Proposta Expirada",
        Icon: IconMoodAnnoyed,
        subtitle: "Proposta expirada por término do prazo vigente.",
        buttonText: "Voltar a Pedidos",
      };

    default:
      return {
        color: "text-gray-700",
        title: "Sem Status",
        Icon: IconMoodSmileBeam,
        buttonText: "",
      };
  }
}
