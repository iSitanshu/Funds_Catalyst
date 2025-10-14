import { Router } from "express"
import Razorpay from "razorpay"
import crypto from 'crypto';
import { paymentSchema } from './../types.js'
import { sendDonationEmail } from "./email.js";

const router = Router();

const razorpay_verification = process.env.RAZORPAY_VERIFICATION_KEY;
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_ID,
  key_secret: process.env.RAZORPAY_SECRET_KEY
})

// we are first preparing a request slip for the current payment
router.post('/create-order', async (req, res) => {
  try {
    const { success, data } = paymentSchema.safeParse(req.body);

    if (!success || !data.amount) {
      return res.status(411).send("Invalid Input");
    }

    // the options order is created by the server and which sents to the razorpay to create the razorpay order
    const options = {
      amount: data.amount * 100, // Amount in paisa
      currency: 'INR',
      receipt: 'receipt_' + Math.random().toString(36).substring(7),
    };
    // razorpay creates the razorpay order with the current info
    const order = await razorpay.orders.create(options); //showing error in creating orders 

    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message }); // FIXED: use "error" instead of "err"
  }
});


// using the razorpay order, we move forward
router.post('/verify-payment', async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, donorInfo } = req.body;

    // Input validation
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !donorInfo) {
        return res.status(400).json({ error: 'Missing required payment verification fields.' });
    }

    const sign = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac('sha256', razorpay_verification)
      .update(sign.toString())
      .digest('hex');

    if (razorpay_signature === expectedSign) {
      // Payment is verified
      await sendDonationEmail(
      donorInfo.email,
      donorInfo.name,
      donorInfo.amount, // The amount should be in paisa
      razorpay_payment_id
    );
      res.status(200).json({ message: 'Payment verified successfully' });
    } else {
      res.status(400).json({ error: 'Invalid payment signature' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;