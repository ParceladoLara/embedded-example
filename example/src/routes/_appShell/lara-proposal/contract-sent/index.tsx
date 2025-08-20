import { createFileRoute } from "@tanstack/react-router";
import signContract from "@/assets/sendContract.gif";

export const Route = createFileRoute("/_appShell/lara-proposal/contract-sent/")(
  {
    component: RouteComponent,
  }
);

function RouteComponent() {
  return (
    <div className="p-10 h-full w-full">
      <div className="h-full w-full flex flex-col justify-center items-center shadow-2xl gap-30 text-center">
        <img
          src={signContract}
          alt="Sign contract"
          height={"200rem"}
          width={"200rem"}
        />
        <h1>
          Enviamos uma mensagem para o WhatsApp cadastrado
          <br />
          com o link para assinatura do contrato.
        </h1>
      </div>
    </div>
  );
}
