import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_appShell/patients/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_appShell/patients/"!</div>;
}
