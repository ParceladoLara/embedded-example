import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/common/components/shadcn/ui/table";
import { GetPatients } from "@/common/services/getPatients.service";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_appShell/patients/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: patients } = GetPatients();

  return (
    <div className="flex flex-1 flex-col p-10 gap-10">
      <h1 className="text-3xl font-bold">Pacientes</h1>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>CPF</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Data de nascimento</TableHead>
              <TableHead>Telefone</TableHead>
              <TableHead>Endereço</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patients?.map((patient) => (
              <TableRow key={patient?.id}>
                <TableCell>{patient?.name ?? ""}</TableCell>
                <TableCell>{patient?.cpf ?? ""}</TableCell>
                <TableCell>{patient?.email ?? ""}</TableCell>
                <TableCell>{patient?.dateOfBirth ?? ""}</TableCell>
                <TableCell>{patient?.cellphone ?? ""}</TableCell>
                <TableCell>{`${patient?.address?.street ?? ""}, ${patient?.address?.city ?? ""} - ${patient?.address?.state ?? ""}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
