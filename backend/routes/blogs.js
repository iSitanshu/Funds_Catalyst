import express from "express";
import { PrismaClient } from "@prisma/client";
import { blogSchema } from "./../types.js";

const router = express.Router();
const prisma = new PrismaClient();

// ✅ POST /add_blogs
router.post("/add_blogs", async (req, res) => {
  try {
    const validatedData = blogSchema.parse(req.body);

    const newBlog = await prisma.blog.create({
      data: {
        title: validatedData.title,
        shortDescription: validatedData.shortDescription,
        content: validatedData.content,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Blog created successfully",
      data: newBlog,
    });
  } catch (error) {
    if (error.name === "ZodError") {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors: error.errors,
      });
    }

    console.error("Error creating blog:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// ✅ GET /fetch_blogs
router.get("/fetch_blogs", async (req, res) => {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: { createdAt: "asc" },
    });

    return res.status(200).json({
      success: true,
      message: "Blogs fetched successfully",
      count: blogs.length,
      data: blogs,
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

router.patch('/edit_blog/:id', async (req, res) => {
  const { id: blogId } = req.params;

  try {
    const validatedData = blogSchema.parse(req.body);
    const updatedBlog = await prisma.blog.update({
      where: {
        id: blogId
      },
      data: {
        title: validatedData.title,
        shortDescription: validatedData.shortDescription,
        content: validatedData.content,
      },
    })
    res.status(200).json({
      message: 'Blog updated successfully',
      updatedBlog,
    });
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({
        message: 'Blog not found',
      });
    }
    // Handle validation errors or other issues
    res.status(500).json({
      message: 'An error occurred while updating the blog',
      error: error.message,
    });
  }
});

router.delete('/delete_blog/:id', async (req, res) => {
  const blogId = req.params.id;

  try {
    const deletedBlog = await prisma.blog.delete({
      where: {
        id: blogId,
      },
    });
    // Send a 200 OK status with a success message and the deleted blog object
    res.status(200).json({
      message: 'Blog deleted successfully',
      deletedBlog,
    });
  } catch (error) {
    // Handle specific errors, like a record not being found
    if (error.code === 'P2025') {
      return res.status(404).json({
        message: 'Blog not found',
      });
    }
    // Handle other errors, such as a database connection issue
    res.status(500).json({
      message: 'An error occurred while deleting the blog',
      error: error.message,
    });
  }
});


export default router;
