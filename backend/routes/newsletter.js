import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { emailContentSchema, newsletterSchema } from "./../types.js";
import { sendNewsletterWelcomeEmail } from "../services/subscribeEmail.js";
import { updateEmail } from "../services/updateEmail.js";

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

// fetch all the emails from the newsletter list
// we need to calculate no of email registered for the newsletter
// we need to fetch the last send time 
router.get('/get_all_emails', async (req, res) => {
    const emailList = await prisma.newsletterSubscriber.findMany({
        where: {}
    })
    // calculate no of emails 
    const count = emailList.length;

    return res.status(200).json({ message: "Here are the email which are subscribed to the newsletter", emailList, count })
})

// from the admin, we can send email just need subject and content of the email
router.post('/send_newsletter', async (req, res) => {
    const { success, data } = emailContentSchema.safeParse(req.body);
    if(!success) {
        return res.status(200).json({ message: "Invalid Request", error: data })
    }

    const emails = await prisma.newsletterSubscriber.findMany({
        where: {}
    })
    
    const emailList = emails.map(index => index.email)

    await updateEmail(
        data.subject,
        data.content,
        emailList
    )

    return res.status(200).json({ message: "Newsletter sends Successfully"})
})

export default router;
