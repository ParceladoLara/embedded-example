import HomeCard from "@/common/components/HomeCard";
import {
  IconBrandAbstract,
  IconHome,
  IconReportMoney,
  IconUsers,
} from "@tabler/icons-react";
import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/_appShell/home/")({
  beforeLoad: () => {
    const token = localStorage.getItem("@Clinicorp:token");
    if (!token) {
      throw redirect({ to: "/" });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-1 flex-col p-10 gap-10">
      <h1 className="text-3xl font-bold">Bem-vindo, Guilherme!</h1>
      <div className="grid grid-cols-2 h-full gap-10">
        <HomeCard
          title="Agendamentos"
          Icon={IconHome}
          onClick={() => navigate({ to: "/appointments" })}
        />
        <HomeCard
          title="Pacientes"
          Icon={IconUsers}
          onClick={() => navigate({ to: "/patients" })}
        />
        <HomeCard
          title="Financeiro"
          Icon={IconReportMoney}
          onClick={() => navigate({ to: "/patients" })}
        />
        <HomeCard
          title="Crédito"
          Icon={IconBrandAbstract}
          onClick={() => navigate({ to: "/lara" })}
        />
      </div>
    </div>
  );
}
