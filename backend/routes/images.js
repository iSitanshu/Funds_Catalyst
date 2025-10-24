import { Router } from 'express';
import { uploadImage } from '../services/uploadService.js';
import upload from '../middleware/multer.js';

const router = Router();

router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image file provided.' });
    }
    
    const result = await uploadImage(req.file.buffer);

    res.status(201).json({
      imageUrl: result.secure_url,
      publicId: result.public_id
    });
  } catch (error) {
    console.error('Error in /upload route:', error);
    res.status(500).json({ error: 'Failed to upload image.' });
  }
});

export default router;
