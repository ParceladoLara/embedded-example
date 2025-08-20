import { type PaymentPlanResponse as PaymentPlanResponseType } from "@parcelado_lara/payment-plan-wasm";
import type { JSX } from "react";
import PaymentPlanResponseDefaultMessage from "../PaymentPlanResponseDefaultMessage";

export type WithInstallmentsFormType = {
  installments: string;
};

interface PaymentPlanResponseProps {
  paymentPlanData?: PaymentPlanResponseType[];
  onSelectInstallment: (installment: PaymentPlanResponseType) => void;
}

export default function PaymentPlanResponse({
  paymentPlanData,
  onSelectInstallment,
}: PaymentPlanResponseProps): JSX.Element {
  if (!paymentPlanData?.length) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <PaymentPlanResponseDefaultMessage />
      </div>
    );
  }

  return (
    <div className="w-3/5 flex flex-col justify-center items-center py-4 px-8">
      <div className=" w-full h-full max-h-full overflow-auto flex flex-col items-center px-20 gap-4">
        {paymentPlanData?.map((plan) => (
          <div
            key={plan.installment}
            className="w-full flex justify-between border-gray-800 border-2 rounded-lg p-6 bg-white cursor-pointer hover:border-green-700"
            onClick={() => onSelectInstallment(plan)}
          >
            <h1 className="font-bold text-2xl">{`${plan.installment} ${plan.installment === 1 ? "Parcela" : "Parcelas"}`}</h1>
            <h1>{`${plan.installment}x de ${plan.installmentAmount}`}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
