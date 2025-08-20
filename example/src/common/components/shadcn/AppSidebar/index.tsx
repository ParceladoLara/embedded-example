import icon from "@/assets/icon.avif";
import {
  IconBrandAbstract,
  IconCalendar,
  IconHome,
  IconUsers,
} from "@tabler/icons-react";
import * as React from "react";

import { NavMain } from "@/common/components/shadcn/NavMain";
import { NavUser } from "@/common/components/shadcn/NavUser";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/common/components/shadcn/ui/sidebar";

const data = {
  user: {
    name: "Guilherme Nunes",
    email: "guilherme@lara.app.br",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Painel",
      url: "/home",
      icon: IconHome,
    },
    {
      title: "Agendamentos",
      url: "/appointments",
      icon: IconCalendar,
    },
    {
      title: "Pacientes",
      url: "/patients",
      icon: IconUsers,
    },
    {
      title: "Crédito",
      url: "/lara",
      icon: IconBrandAbstract,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="/home">
                <img src={icon} alt="Logo" style={{ maxHeight: "3rem" }} />
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
