import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const router = new Router();
const prisma = new PrismaClient();

router.get("/get_dashboard", async (req, res) => {
  try {
    // ✅ Total subscribers
    const totalSubscribers = await prisma.newsletterSubscriber.findMany({});
    const no_of_subscribers = totalSubscribers.length;

    // ✅ 3 most recent subscribers
    const recentSubscribers = await prisma.newsletterSubscriber.findMany({
      select: {
        email: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 3,
    });

    // ✅ Total blogs
    const blogs = await prisma.blog.findMany({});
    const no_of_blogs = blogs.length;

    // ✅ 3 most recent blog posts
    const recentBlogs = await prisma.blog.findMany({
      select: {
        id: true,
        title: true,
        shortDescription: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 3,
    });

    // ✅ Total consultancy bookings
    const consultant = await prisma.consultancyBooking.findMany({});
    const no_of_consultant = consultant.length;

    // ✅ Respond with all values
    res.status(200).json({
      success: true,
      message: "Dashboard data fetched successfully",
      data: {
        totalCounts: {
          subscribers: no_of_subscribers,
          blogs: no_of_blogs,
          consultancyBookings: no_of_consultant,
        },
        recentSubscribers,
        recentBlogs,
      },
    });
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

export default router;
