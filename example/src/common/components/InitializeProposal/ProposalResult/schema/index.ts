import { nextDisbursementDate } from "@parcelado_lara/payment-plan-wasm";
import { z } from "zod";

const required = "Campo obrigatório";

function formatDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

const CompleteProposalSchema = z.object({
  installments: z.string().nonempty(required),
  firstPaymentDate: z.string().nonempty(required),
});

const CompleteProposalSchemaDefaultValues = {
  installments: "3",
  firstPaymentDate: formatDate(nextDisbursementDate(new Date())),
};

type CompleteProposalFormSchema = z.infer<typeof CompleteProposalSchema>;

export {
  CompleteProposalSchema,
  CompleteProposalSchemaDefaultValues,
  type CompleteProposalFormSchema,
};
