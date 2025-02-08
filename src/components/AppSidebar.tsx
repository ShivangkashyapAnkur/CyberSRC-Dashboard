
import { Home, LayoutDashboard, Users, FileText, Settings, PlusCircle } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", icon: LayoutDashboard, url: "/" },
  { title: "UI Elements", icon: FileText, url: "#" },
  { title: "Components", icon: Users, url: "#" },
  { title: "Forms", icon: FileText, url: "#" },
  { title: "Data Table", icon: Home, url: "#" },
  { title: "Extra", icon: Settings, url: "#" },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <div className="p-4">
          <h1 className="text-2xl font-bold text-primary mb-8">blueBox</h1>
          <button className="w-full bg-primary text-white rounded-lg py-2 px-4 flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
            <PlusCircle size={20} />
            <span>Add Project</span>
          </button>
        </div>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <item.icon size={20} />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
