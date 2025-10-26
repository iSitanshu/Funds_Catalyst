import { useEffect, useState } from "react";
import { Users, FileText, Calendar } from "lucide-react";
import { StatsCard } from "@/components/admin/StatsCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Dashboard() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/dashboard/get_dashboard`);
        const data = await response.json();
        if (data.success) {
          setDashboardData(data.data);
        }
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-muted-foreground animate-pulse">Loading dashboard data...</p>
      </div>
    );
  }

  if (!dashboardData) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-red-500">Failed to load dashboard data.</p>
      </div>
    );
  }

  const { totalCounts, recentSubscribers, recentBlogs } = dashboardData;

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-1">Welcome back! Here's what's happening.</p>
      </div>

      {/* Stats Section */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Subscribers"
          value={totalCounts.subscribers}
          icon={Users}
          description="Newsletter subscribers"
        />
        <StatsCard
          title="Published Blogs"
          value={totalCounts.blogs}
          icon={FileText}
          description="Active blog posts"
        />
        <StatsCard
          title="Consultancy Bookings"
          value={totalCounts.consultancyBookings}
          icon={Calendar}
          description="Pending requests"
        />
      </div>

      {/* Recent Subscribers and Blogs */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Subscribers */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Subscribers</CardTitle>
            <CardDescription>Latest newsletter sign-ups</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentSubscribers.length > 0 ? (
                recentSubscribers.map((subscriber, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 bg-accent/50 rounded-lg"
                  >
                    <div>
                      <p className="font-medium">{subscriber.email}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {new Date(subscriber.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">No recent subscribers.</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Recent Blogs */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Blog Posts</CardTitle>
            <CardDescription>Latest published content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentBlogs.length > 0 ? (
                recentBlogs.map((blog, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 bg-accent/50 rounded-lg"
                  >
                    <div>
                      <p className="font-medium">{blog.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {blog.shortDescription}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">No recent blogs.</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
