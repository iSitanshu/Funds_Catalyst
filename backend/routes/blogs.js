// src/routes/blogRoutes.js
import express from "express";
import { PrismaClient } from "@prisma/client";
import { blogSchema } from "./../types.js";

const router = express.Router();
const prisma = new PrismaClient();

// POST /add_blogs
router.post("/add_blogs", async (req, res) => {
  try {
    const validatedData = blogSchema.parse(req.body);

    const newBlog = await prisma.blog.create({
      data: validatedData,
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

export default router;
