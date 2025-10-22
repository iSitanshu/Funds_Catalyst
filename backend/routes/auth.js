import { Router } from "express";
import { signinSchema } from "./../types.js";

const router = Router();

// need to create login and signup using username, email, password
router.post('/login', async (req, res) => {
    const { success, data } = signinSchema.safeParse(req.body);
    if(!success) {
        return res.status(400).json({message: "Invalid Request", error: data})
    }
    
})

export default router;