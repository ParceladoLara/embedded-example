import { InitializeLaraProposal } from "@/common/services/initializeProposal.service";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_appShell/lara-proposal/initialize/$appointmentId/"
)({
  component: RouteComponent,
});

function RouteComponent() {
  const { appointmentId } = Route.useParams();

  const { mutate: initializeProposal, isPending: initializeProposalIsLoading } =
    InitializeLaraProposal();

  if (initializeProposalIsLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        Carregando...
      </div>
    );
  }

  return (
    <div className="p-10 h-full">
      <div className="shadow-2xl h-full w-full  flex bg-gray-200">
        <div
          className="bg-white w-2/5 flex flex-col justify-center
        items-center p-4"
        >
          a
        </div>
        <div
          className="w-3/5 flex flex-col justify-center
        items-center p-4"
        >
          a
        </div>
      </div>
    </div>
  );
}
