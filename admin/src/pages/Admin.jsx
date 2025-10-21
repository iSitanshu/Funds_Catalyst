import { useState } from "react";
import { Sidebar } from "../components/admin/Sidebar"
import { Header } from "../components/admin/Header"
import {Dashboard} from "./admin/Dashboard";
import Newsletter from "./admin/Newsletter";
import BlogManagement from "./admin/BlogManagement";
import SendMail from "./admin/SendMail";
import Consultancy from "./admin/Consultancy";
import Settings from "./admin/Settings";

const Admin = () => {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />;
      case "newsletter":
        return <Newsletter />;
      case "blogs":
        return <BlogManagement />;
      case "consultancy":
        return <Consultancy />;
      case "mail":
        return <SendMail />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-background">
      <Sidebar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 md:p-8 lg:p-10">
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

export default Admin;
