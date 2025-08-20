import ConfirmAppointmentForm from "@/common/components/ConfirmAppointment/Form";
import AppointmentsInfos from "@/common/components/ConfirmAppointment/Infos";
import { GetAppointment } from "@/common/services/getAppointment.service";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_appShell/appointments/confirm/$id/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();

  const { data: appointment } = GetAppointment(Number(id));

  return (
    <div className="flex flex-1 flex-col p-10 gap-10">
      <h1 className="text-3xl font-bold">Confirmar agendamento</h1>

      <div className="grid grid-cols-2 gap-16">
        <AppointmentsInfos appointment={appointment} />
        <ConfirmAppointmentForm
          appointmentId={Number(id)}
          appointment={appointment}
        />
      </div>
    </div>
  );
}
