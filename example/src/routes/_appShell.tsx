import { AppSidebar } from "@/common/components/shadcn/AppSidebar";
import { SiteHeader } from "@/common/components/shadcn/SiteHeader";
import {
  SidebarInset,
  SidebarProvider,
} from "@/common/components/shadcn/ui/sidebar";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_appShell")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
}
