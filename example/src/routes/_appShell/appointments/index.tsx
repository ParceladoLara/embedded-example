import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_appShell/appointments/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_appShell/appointments/"!</div>;
}
