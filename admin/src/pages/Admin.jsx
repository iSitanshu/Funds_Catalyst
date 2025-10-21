import { useState } from "react";
// import { Sidebar } from "../components/admin/Sidebar";
import { Sidebar } from "../components/admin/Sidebar"
import { Header } from "../components/admin/Header"
import AdminIntro from "./AdminIntro";
// import { Header } from "../components/admin/Header";
// import { Dashboard } from "./admin/Dashboard";
// import { Newsletter } from "./admin/Newsletter";
// import { BlogManagement } from "./admin/BlogManagement";
// import { Consultancy } from "./admin/Consultancy";
// import { SendMail } from "./admin/SendMail";
// import { Settings } from "./admin/Settings";

const Admin = () => {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <AdminIntro />;
      case "newsletter":
        return <AdminIntro />;
      case "blogs":
        return <AdminIntro />;
      case "consultancy":
        return <AdminIntro />;
      case "mail":
        return <AdminIntro />;
      case "settings":
        return <AdminIntro />;
      default:
        return <AdminIntro />;
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
