import { Router } from "express";
import bcrypt from 'bcrypt';
import { signinSchema, signupSchema } from "./../types.js";
import { PrismaClient } from "@prisma/client";
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const salt_rounds = Number(process.env.SALT_ROUNDS) || 10;
const router = Router();
const secret_key = process.env.JWT_SECRET;

// need to create login and signup using username, email, password
router.post('/login', async (req, res) => {
    const { success, data } = signinSchema.safeParse(req.body);
    if (!success) {
        return res.status(400).json({ message: "Invalid Request", error: data })
    }

    const existing_user = await prisma.user.findUnique({
        where: {
            email: data.email
        }
    })
    if (!existing_user) return res.status(400).json({ message: "User does not exist" });

    // check the password with the encrypted password and return the token if matches
    let passwordMatch;
    try {
        passwordMatch = await bcrypt.compare(data.password, existing_user.password);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error comparing passwords" });
    }

    if (!passwordMatch) {
        return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
        { email: existing_user.email, id: existing_user.id },
        secret_key,
        { expiresIn: "7d" }
    )

    return res.status(200).json({ message: "Login successful", success: true, token });
})

router.post('/signup', async (req, res) => {
    const { success, data } = signupSchema.safeParse(req.body);
    if (!success) {
        return res.status(400).json({ message: "Invalid Request", error: data })
    }

    //check if the user already exists or not
    const existing_user = await prisma.user.findUnique({
        where: {
            email: data.email
        }
    })

    if (existing_user) return res.status(400).json({ message: "User already exists" });

    // bcrypt to encrypt the password
    let encrypted_password;
    try {
        encrypted_password = await bcrypt.hash(data.password, salt_rounds);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error encrypting password" });
    }

    const new_user = await prisma.user.create({
        data: {
            email: data.email,
            username: data.username,
            password: encrypted_password
        }
    })

    res.status(200).json({ message: "Signup successful", success: true });
})

router.post('/admin_signup', async (req, res) => {
    const { success, data } = signupSchema.safeParse(req.body);
    if (!success) {
        return res.status(400).json({ message: "Invalid Request", error: data })
    }

    // check if the already exist in the SpecificEmail mail lists
    const ispresentinthelist = await prisma.specificEmailList.findUnique({
        where: {
            email: data.email
        }
    })
    if (!ispresentinthelist) return res.status(400).json({ message: "You are not authorized to create an admin account" });

    //check if the user already exists or not
    const existing_user = await prisma.user.findUnique({
        where: {
            email: data.email
        }
    })
    if (existing_user) return res.status(400).json({ message: "User already exists" });
    // bcrypt to encrypt the password
    let encrypted_password;
    try {
        encrypted_password = await bcrypt.hash(data.password, salt_rounds);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error encrypting password" });
    }

    const new_admin = await prisma.admin.create({
        data: {
            email: data.email,
            username: data.username,
            password: encrypted_password,
        }
    })

    const token = jwt.sign(
        {
            email: new_admin.email,
            id: new_admin.id
        },
        secret_key,
        { expiresIn: "1d" }
    )

    res.status(200).json({ message: "Admin Signup successful", success: true });  
})

router.post('/admin_login', async (req, res) => {
    const { success, data } = signinSchema.safeParse(req.body);
    if (!success) {
        return res.status(400).json({ message: "Invalid Request", error: data })
    }
    // check if this email is present in the specificEmail list 
    const ispresentinthelist = await prisma.specificEmailList.findUnique({
        where: {
            email: data.email
        }
    })
    if (!ispresentinthelist) return res.status(400).json({ message: "You are not authorized to create an admin account" });

    // then check whether this user signedup or not 
    const existing_admin = await prisma.admin.findUnique({
        where: {
            email: data.email
        }
    });
    if (!existing_admin) return res.status(400).json({ message: "Admin does not exits" });

    // check the password with the encrypted password and return the token if matches
    let passwordMatch;
    try {
        passwordMatch = await bcrypt.compare(data.password, existing_admin.password);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error comparing passwords" });
    }

    if (!passwordMatch) {
        return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
        { email: existing_admin.email, id: existing_admin.id },
        secret_key,
        { expiresIn: "7d" }
    )

    return res.status(200).json({ message: "Admin Login successful", success: true, token, existing_admin });
})

export default router;