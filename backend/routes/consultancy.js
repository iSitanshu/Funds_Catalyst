import { Router } from "express"
import { PrismaClient } from "@prisma/client";
import { consultancyBookingSchema } from "./../types.js";

const prisma = new PrismaClient();
const router = Router();

// user can book consultant from the frontend
router.post('/book_consultant', async (req, res) => {
    const { success, data } = consultancyBookingSchema.safeParse(req.body);
    if (!success) {
        return res.status(400).json({ message: "Invalid Request", error: data })
    }

    // add the request in the db
    const booking = await prisma.consultancyBooking.create({
        data: {
            fullName: data.fullName, 
            email: data.email, 
            phone: data.phone,
            organization: data.organization, 
            organizationType: data.organizationType,
            requirement: data.requirement,
            message: data.message,
            completed: false
        }
    })

    if(!booking) return res.status(400).json({ message: "Something went wrong. Please try again latter"})

    return res.status(201).json({ message: "Consultancy Booking Created Successfully"})
})

// admin can fetch all the booking consultanct forms along with we will give which all are completed which all are not completed
// along with count of the no of bookings
router.get('/fetch_bookings', async (req, res) => {
    const all_bookings = await prisma.consultancyBooking.findMany({
        where: {}
    })
    const count = all_bookings.length;

    return res.status(200).json({ message: "Here are the consultancy bookings", all_bookings, count })        
})


export default router;