import { Router } from 'express';
import { uploadImage } from '../services/uploadService.js';
import upload from '../middleware/multer.js';

const router = Router();

router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image file provided." });
    }

    console.log("📤 Uploading image to Cloudinary...");

    const result = await uploadImage(req.file.buffer);

    console.log("✅ Upload successful:", result.secure_url);

    // 🟢 Always RETURN the response to prevent further execution
    return res.status(201).json({
      imageUrl: result.secure_url,
      publicId: result.public_id,
    });

  } catch (error) {
    // 🔴 Only actual errors should reach here
    console.error("❌ Error in /upload route:", error);
    return res.status(500).json({ error: "Failed to upload image." });
  }
});


export default router;
