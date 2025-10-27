import { Search, Moon, Sun, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate(); // useNavigate hook
  const [darkMode, setDarkMode] = useState(false);
  const admintoken = useSelector((state) => state.admin.admintoken)
  const adminInfo = useSelector((state) => state.admin.adminInfo);

  useEffect(() => {
    if(!admintoken) {
      navigate('/sign-in')
      return;
    }
  }, [admintoken, navigate])
  

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="border-b border-border sticky top-0 z-10 backdrop-blur-sm bg-card/95">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-10 bg-background"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="hover:bg-accent"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <div className="h-6 w-px bg-border" />

          <div className="flex items-center gap-3">
            <div className="text-sm">
              <p className="font-medium">{adminInfo?.username || "Admin User"}</p>
              <p className="text-xs text-muted-foreground">
                {adminInfo?.email || "admin@example.com"}
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-destructive/10 hover:text-destructive"
              onClick={() => {
                localStorage.removeItem("admintoken");
                localStorage.removeItem("adminInfo");
                navigate("/sign-in");
              }}
            >
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
