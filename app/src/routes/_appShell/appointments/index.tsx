import { Button } from "@/common/components/shadcn/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/common/components/shadcn/ui/table";
import { GetAppointments } from "@/common/services/getAppointments.service";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/_appShell/appointments/")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();

  const { data: appointments } = GetAppointments();

  return (
    <div className="flex flex-1 flex-col p-10 gap-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Agendamentos</h1>
        <Button onClick={() => navigate({ to: "/appointments/create" })}>
          Novo agendamento
        </Button>
      </div>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome Paciente</TableHead>
              <TableHead>Valor</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Lara ID</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appointments?.map((appointment) => (
              <TableRow key={appointment?.id}>
                <TableCell>{appointment?.patient?.name ?? "-"}</TableCell>
                <TableCell>{appointment?.value ?? "-"}</TableCell>
                <TableCell>
                  {appointment?.lara_proposal_status ?? "-"}
                </TableCell>
                <TableCell>{appointment?.lara_proposal_id ?? "-"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
