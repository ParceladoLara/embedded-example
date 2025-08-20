import { CompleteLaraProposal } from "@/common/services/completeProposal.service";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

import sendingGif from "@/assets/send-gif.webp";
import { useEffect } from "react";
import { nextDisbursementDate } from "@parcelado_lara/payment-plan-wasm";

export const Route = createFileRoute(
  "/_appShell/lara-proposal/complete/$appointmentId/"
)({
  component: RouteComponent,
});

function RouteComponent() {
  const { appointmentId } = Route.useParams();
  const navigate = useNavigate();

  const { mutate: completeProposal } = CompleteLaraProposal();

  useEffect(() => {
    if (appointmentId) {
      completeProposal(
        {
          appointment_id: Number(appointmentId),
          firstPaymentDate: nextDisbursementDate(new Date()),
          installments: 5,
        },
        {
          onSuccess() {
            navigate({ to: "/lara-proposal/contract-sent" });
          },
        }
      );
    }
  }, []);

  return (
    <div className="p-10 h-full w-full">
      <div className="h-full w-full flex flex-col justify-center items-center shadow-2xl">
        <img src={sendingGif} alt="Sending contract" />
        <h1>Aguarde enquanto enviamos o contrato pelo WhatsApp.</h1>
      </div>
    </div>
  );
}
