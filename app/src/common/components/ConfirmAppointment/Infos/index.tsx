import type { GetAppointmentsResponseType } from "@/common/types/GetAppointmentsResponseType";
import type React from "react";

interface AppointmentsInfosProps {
  appointment: GetAppointmentsResponseType | undefined;
}

export default function AppointmentsInfos({
  appointment,
}: AppointmentsInfosProps) {
  const renderInfo = (label: string, value: string): React.ReactNode => (
    <div className="flex flex-col gap-1 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <span className="text-gray-500 text-sm font-medium">{label}</span>
      <span className="text-gray-900 text-base font-semibold">{value}</span>
    </div>
  );

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-bold text-gray-800">
        Informações do paciente:
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {renderInfo("Nome", appointment?.patient?.name ?? "-")}
        {renderInfo("CPF", appointment?.patient?.cpf ?? "-")}
        {renderInfo("Telefone", appointment?.patient?.cellphone ?? "-")}
        {renderInfo(
          "Data de nascimento",
          appointment?.patient?.dateOfBirth ?? "-"
        )}
        {renderInfo(
          "Valor do tratamento",
          appointment?.value?.toString() ?? "-"
        )}
      </div>
    </div>
  );
}
