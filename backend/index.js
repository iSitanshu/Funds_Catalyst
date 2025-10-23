import dotenv from "dotenv";
dotenv.config();

import express from "express"
import cors from "cors"
import authRouter from "./routes/auth.js"
import razorpayRouter from "./routes/razorpay.js"
import newsletterRouter from "./routes/newsletter.js"
import consultancyRouter from './routes/consultancy.js'
import cloudinary from 'cloudinary'

const app = express();
const PORT = process.env.PORT || 69;

app.use(cors());
app.use(express.json());
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
  secure: true // Recommended for HTTPS URLs
});

app.use("/api/auth", authRouter);
app.use("/api/payment", razorpayRouter);
app.use("/api/newsletter", newsletterRouter);
app.use("/api/consultancy", consultancyRouter)
// network
// blogs

app.listen(PORT, () => {
   console.log(`Server is running on PORT: ${PORT}`);
})
