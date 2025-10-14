import nodemailer from 'nodemailer';

// 1. Create a Nodemailer transporter
// This is the object that will actually send the email.
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use Gmail as the service
  auth: {
    user: process.env.EMAIL_USER, // Your email from .env
    pass: process.env.EMAIL_PASS, // Your App Password from .env
  },
});

// 2. Verify the transporter configuration
transporter.verify((error) => {
  if (error) {
    console.error('Error with Nodemailer transporter config:', error);
  }
});

export const sendDonationEmail = async (donorEmail, donorName, amountInPaisa, paymentId) => {
  const formattedAmount = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(amountInPaisa / 100);

  const mailOptions = {
    from: `"Funds Catalyst NGO" <${process.env.EMAIL_USER}>`,
    to: donorEmail,
    subject: 'Thank You for Your Generous Donation!',
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #0056b3;">Dear ${donorName},</h2>
          <p>We are incredibly grateful for your generous donation of <strong>${formattedAmount}</strong>.</p>
          <p>Your support helps us continue our mission and make a real difference in the community. Every contribution, big or small, plays a vital part in our work.</p>
          <p>Thank you once again for your kindness and for being a part of our cause.</p>
          <p>Warm regards,</p>
          <p><strong>The Team at Funds Catalyst</strong></p>
          <hr style="border: 0; border-top: 1px solid #eee;"/>
          <p style="font-size: 0.8em; color: #777;">Your Transaction ID: ${paymentId}</p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Donation confirmation email sent successfully to ${donorEmail}`);
  } catch (error) {
    console.error(`Failed to send email to ${donorEmail}:`, error);
    // In a real app, you might want to add this to a queue to retry later
  }
};