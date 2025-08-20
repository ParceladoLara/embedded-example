import PaymentPlanResponse from "@/common/components/InitializeProposal/PaymentPlanResponse";
import ProposalResult from "@/common/components/InitializeProposal/ProposalResult";
import {
  CompleteProposalSchema,
  CompleteProposalSchemaDefaultValues,
  type CompleteProposalFormSchema,
} from "@/common/components/InitializeProposal/ProposalResult/schema";
import { InitializeLaraProposal } from "@/common/services/initializeProposal.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { FormProvider, useForm } from "react-hook-form";
import {
  calculatePaymentPlan,
  nextDisbursementDate,
  type PaymentPlanResponse as PaymentPlanResponseType,
} from "@parcelado_lara/payment-plan-wasm";
import { useEffect, useState } from "react";
import { Button } from "@/common/components/shadcn/ui/button";
import type { InitializeProposalResponseType } from "@/common/types/InitializeProposalResponseType";

export const Route = createFileRoute(
  "/_appShell/lara-proposal/initialize/$appointmentId/"
)({
  component: RouteComponent,
});

function RouteComponent() {
  const { appointmentId } = Route.useParams();
  const navigate = useNavigate();

  const [initializeProposalData, setInitializeProposalData] =
    useState<InitializeProposalResponseType | null>(null);

  const [paymentPlanData, setPaymentPlanData] = useState<
    PaymentPlanResponseType[]
  >([]);
  const [selectedInstallment, setSelectedInstallment] =
    useState<PaymentPlanResponseType | null>(null);

  const { mutate: initializeProposal, isPending: initializeProposalIsLoading } =
    InitializeLaraProposal();

  const form = useForm<CompleteProposalFormSchema>({
    resolver: zodResolver(CompleteProposalSchema),
    defaultValues: CompleteProposalSchemaDefaultValues,
  });

  useEffect(() => {
    if (appointmentId) {
      initializeProposal(
        { appointment_id: Number(appointmentId) },
        {
          onSuccess: (data) => {
            setInitializeProposalData(data);
          },
          onError: (err) => {
            console.error("Erro ao inicializar proposta:", err);
          },
          onSettled: (data) => {
            if (data) {
              setInitializeProposalData(data);
            }
          },
        }
      );
    }
  }, [appointmentId, initializeProposal]);

  if (initializeProposalIsLoading && !initializeProposalData) {
    return (
      <div className="flex items-center justify-center h-full">
        Carregando...
      </div>
    );
  }

  const onCalculatePaymentPlan = (values: CompleteProposalFormSchema): void => {
    if (!initializeProposalData) return;

    const response = calculatePaymentPlan({
      debitServicePercentage: 0,
      requestedAmount: initializeProposalData.requestedAmount ?? 1000,
      firstPaymentDate: new Date(values.firstPaymentDate),
      installments: 24,
      disbursementOnlyOnBusinessDays: true,
      iofOverall: 0.0038,
      iofPercentage: 0.000082,
      disbursementDate: nextDisbursementDate(new Date()),
      interestRate: 0.048,
      maxTotalAmount: Number.MAX_SAFE_INTEGER,
      mdr: 0.03,
      minInstallmentAmount: 100,
      tacPercentage: 0,
    });

    if (!response) return;
    setPaymentPlanData(response);
  };

  const onSelectInstallment = (installment: PaymentPlanResponseType): void => {
    setSelectedInstallment(installment);
  };

  const onGoToCompleteProposal = (): void => {
    navigate({ to: `/lara-proposal/complete/${appointmentId}` });
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onCalculatePaymentPlan)}
        className="p-10 h-full flex flex-col gap-8"
      >
        <div
          className="shadow-2xl w-full flex bg-gray-200"
          style={{ height: "75vh", maxHeight: "75vh" }}
        >
          <ProposalResult
            initializeProposalData={initializeProposalData ?? undefined}
          />
          <PaymentPlanResponse
            paymentPlanData={paymentPlanData}
            onSelectInstallment={onSelectInstallment}
          />
        </div>
        <div className="w-full flex justify-center">
          <Button
            type="button"
            className="bg-green-600 hover:bg-green-700 cursor-pointer w-3xs"
            disabled={!selectedInstallment}
            onClick={onGoToCompleteProposal}
          >
            Prosseguir
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
