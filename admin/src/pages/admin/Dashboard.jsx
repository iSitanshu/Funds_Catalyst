import { Users, FileText, Calendar, TrendingUp } from "lucide-react";
import { StatsCard } from "@/components/admin/StatsCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";

const mockRecentSubscribers = [
  { name: "John Doe", email: "john@example.com", date: "2025-10-20" },
  { name: "Jane Smith", email: "jane@example.com", date: "2025-10-19" },
  { name: "Bob Johnson", email: "bob@example.com", date: "2025-10-18" },
];

const mockRecentBlogs = [
  { title: "Getting Started with React", date: "2025-10-15" },
  { title: "Advanced TypeScript Tips", date: "2025-10-10" },
];

export function Dashboard() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-1">Welcome back! Here's what's happening.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Subscribers"
          value="1,234"
          icon={Users}
          description="Newsletter subscribers"
          trend={{ value: "+12% from last month", isPositive: true }}
        />
        <StatsCard
          title="Published Blogs"
          value="42"
          icon={FileText}
          description="Active blog posts"
          trend={{ value: "+3 this week", isPositive: true }}
        />
        <StatsCard
          title="Consultancy Bookings"
          value="18"
          icon={Calendar}
          description="Pending requests"
          trend={{ value: "+5 new", isPositive: true }}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Subscribers</CardTitle>
            <CardDescription>Latest newsletter sign-ups</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockRecentSubscribers.map((subscriber, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-accent/50 rounded-lg">
                  <div>
                    <p className="font-medium">{subscriber.name}</p>
                    <p className="text-sm text-muted-foreground">{subscriber.email}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{subscriber.date}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Blog Posts</CardTitle>
            <CardDescription>Latest published content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockRecentBlogs.map((blog, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-accent/50 rounded-lg">
                  <p className="font-medium">{blog.title}</p>
                  <span className="text-xs text-muted-foreground">{blog.date}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
