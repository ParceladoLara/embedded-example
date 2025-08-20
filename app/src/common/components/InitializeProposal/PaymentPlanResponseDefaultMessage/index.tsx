import { IconCoins } from "@tabler/icons-react";
import type { JSX } from "react";

export default function PaymentPlanResponseDefaultMessage(): JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center">
      <IconCoins size={"3rem"} />
      <h1 className="text-2xl font-semibold text-center">
        Planos de Parcelamento
      </h1>
      <h1 className="text-lg font-regular text-center">
        As informações do parcelamento aparecerão aqui após calcular.
      </h1>
    </div>
  );
}
