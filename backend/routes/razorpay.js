import { Router } from "express"
import Razorpay from "razorpay"
import crypto from 'crypto';

const router = Router();

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_ID,
    key_secret: process.env.RAZORPAY_SECRET_KEY
})


router.post('/create-order', async (req, res) => {
    try {
        const options = {
            amount: req.body.amount * 100, // Amount in paisa
            currency: 'INR',
            receipt: 'receipt_' + Math.random().toString(36).substring(7),
        };
        const order = await razorpay.orders.create(options);
        res.status(200).json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: err.message });
    }
});



router.post('/verify-payment', async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const sign = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSign = crypto.createHmac('sha256', 'YOUR_RAZORPAY_KEY_SECRET')
                            .update(sign.toString())
                            .digest('hex');

    if (razorpay_signature === expectedSign) {
      // Payment is verified
      res.status(200).json({ message: 'Payment verified successfully' });
    } else {
      res.status(400).json({ error: 'Invalid payment signature' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;