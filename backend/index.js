import dotenv from "dotenv";
dotenv.config();

import express from "express"
import cors from "cors"
import authRouter from "./routes/auth.js"
import razorpayRouter from "./routes/razorpay.js"


const app = express();
const PORT = process.env.PORT || 69;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/payment", razorpayRouter);

app.listen(PORT, () => {
   console.log(`Server is running on PORT: ${PORT}`);
})
