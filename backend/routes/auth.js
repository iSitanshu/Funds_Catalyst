import { Router } from "express";

const router = Router();

router.post('/auth', async(req, res) => {
    res.status(500).send("this is it");
})

export default router;