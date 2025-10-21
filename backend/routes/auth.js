import { Router } from "express";

const router = Router();

// need to create login and signup using username, email, password
router.post('/auth', async(req, res) => {
    res.status(500).send("this is it");
})

export default router;
