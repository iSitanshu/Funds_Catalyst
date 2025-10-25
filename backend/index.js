import dotenv from "dotenv";
dotenv.config();

import express from "express"
import cors from "cors"
import authRouter from "./routes/auth.js"
import razorpayRouter from "./routes/razorpay.js"
import newsletterRouter from "./routes/newsletter.js"
import consultancyRouter from './routes/consultancy.js'
import networkRouter from './routes/network.js'
import blogRouter from './routes/blogs.js'
import dashboardRouter from './routes/dashboard.js'

const app = express();
const PORT = process.env.PORT || 69;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));   


app.use("/api/auth", authRouter);
app.use("/api/payment", razorpayRouter);
app.use("/api/newsletter", newsletterRouter);
app.use("/api/consultancy", consultancyRouter)
app.use('/api/network', networkRouter);
app.use('/api/blogs', blogRouter);
app.use('/api/dashboard', dashboardRouter);

app.listen(PORT, () => {
   console.log(`Server is running on PORT: ${PORT}`);
})
