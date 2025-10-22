import { Router } from "express";
import { signinSchema, signupSchema } from "./../types.js";
import bcrypt from 'bcrypt';

const router = Router();

// need to create login and signup using username, email, password
router.post('/login', async (req, res) => {
    const { success, data } = signinSchema.safeParse(req.body);
    if(!success) {
        return res.status(400).json({message: "Invalid Request", error: data})
    }
    // check the password with the encrypted password and return the token if matches
})

router.post('/signup', async (req, res) => {
    const { success, data } = signupSchema.safeParse(req.body);
    if(!success) {
        return res.status(400).json({message: "Invalid Request", error: data})
    } 
    // bcrypt to encrypt the password
    bcrypt.hash(data.password, process.env.SALT_ROUNDS || 10, (err, hashpassword) => {
        console.log(hashpassword)
    })
    res.status(200).json({ message: "Signup successful"});
})

export default router;