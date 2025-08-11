import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_appShell/home")({
  beforeLoad: () => {
    const token = localStorage.getItem("@Clinicorp:token");
    if (!token) {
      throw redirect({ to: "/" });
    }
  },
  component: RouteComponent,
});

import data from "../data.json";

function RouteComponent() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <SectionCards />
          <DataTable data={data} />
        </div>
      </div>
    </div>
  );
}
