import { LayoutDashboard, Users, FileText, Calendar, Mail, Settings, ChevronLeft } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "newsletter", label: "Newsletter", icon: Users },
  { id: "blogs", label: "Blog Management", icon: FileText },
  { id: "consultancy", label: "Consultancy", icon: Calendar },
  { id: "mail", label: "Send Mail", icon: Mail },
  { id: "settings", label: "Settings", icon: Settings },
];

export function Sidebar({ currentPage, onNavigate, collapsed, onToggleCollapse }) {
  return (
    <aside
      className={cn(
        "bg-card border-r border-border h-screen sticky top-0 transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="p-4 flex items-center justify-between border-b border-border">
          {!collapsed && (
            <h2 className="font-bold text-xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Admin Panel
            </h2>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleCollapse}
            className="hover:bg-accent"
          >
            <ChevronLeft className={cn("h-5 w-5 transition-transform", collapsed && "rotate-180")} />
          </Button>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;

            return (
              <Button
                key={item.id}
                variant={isActive ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start transition-all",
                  collapsed ? "px-2" : "px-4",
                  isActive && "bg-primary text-primary-foreground"
                )}
                onClick={() => onNavigate(item.id)}
              >
                <Icon className={cn("h-5 w-5", !collapsed && "mr-3")} />
                {!collapsed && <span>{item.label}</span>}
              </Button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border">
          {!collapsed && (
            <div className="text-xs text-muted-foreground">
              <p>Admin Dashboard v1.0</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
