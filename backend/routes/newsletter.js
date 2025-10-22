import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { newsletterSchema } from "../types.js";
import { sendNewsletterWelcomeEmail } from "../services/subscribeEmail.js";

const prisma = new PrismaClient();
const router = Router();

// handles the newsletter subscription from the frontend
router.post('/add_email', async (req, res) => {
    const {  success, data } = newsletterSchema.safeParse(req.body);
    if(!success) {
        return res.status(400).json({ message: "Invalid Request", error: data });
    }

    // check if the email alread exits in the newsletter lst
    const existing_email = await prisma.newsletterSubscriber.findUnique({
        where: {
            email: data.email
        }
    })

    if(existing_email) {
        return res.status(400).json({ message: "Email already subscribed to the newsletter" });
    }

    //add the email to the newletter list
    const email = await prisma.newsletterSubscriber.create({
        data: {
            email: data.email,
        }
    })

    await sendNewsletterWelcomeEmail(
        data.email
    )
    return res.status(200).json({ message: "Email subscribed successfully to the newsletter" });
})

export default router;
