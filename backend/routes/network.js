import { Router } from 'express';
import { uploadImage } from '../services/uploadService.js';
import upload from '../middleware/multer.js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = Router();

// POST /add_network
router.post('/add_network', upload.single('image'), async (req, res) => {
  try {
    const { description, adminId } = req.body;

    if (!description) {
      return res.status(400).json({ error: 'Description is required.' });
    }

    if (!req.file) {
      return res.status(400).json({ error: 'No image file provided.' });
    }

    // Upload image to Cloudinary
    const result = await uploadImage(req.file.buffer);

    // Save record in Prisma
    const newNetwork = await prisma.network.create({
      data: {
        imageUrl: result.secure_url,
        description,
        adminId: adminId || null, // optional
      },
    });

    res.status(201).json({
      message: 'Network added successfully!',
      network: newNetwork,
    });
  } catch (error) {
    console.error('Error in /add_network route:', error);
    res.status(500).json({ error: 'Failed to add network.' });
  }
});


// fetch all the images 
router.get('/fetch_network', async (req, res) => {
  const network_info = await prisma.network.findMany({
    where: {}
  })

  if(!network_info) return res.status(404).json({ message: "Failed to Fetch try again"})
  return res.status(201).json({message: "Network Info Fetched successfully", network_info});
})

export default router;