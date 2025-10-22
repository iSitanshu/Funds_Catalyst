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

export const sendNewsletterWelcomeEmail = async (subscriberEmail) => {
  const mailOptions = {
    from: `"Funds Catalyst NGO" <${process.env.EMAIL_USER}>`,
    to: subscriberEmail,
    subject: 'Welcome to the Funds Catalyst Newsletter!',
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #0056b3;">Welcome to Funds Catalyst!</h2>
          <p>Thank you for subscribing to the <strong>Funds Catalyst Newsletter</strong>.</p>
          <p>We’re excited to have you with us! As a subscriber, you'll receive:</p>
          <ul>
            <li>Updates on our latest initiatives and impact stories</li>
            <li>Information on upcoming campaigns and events</li>
            <li>Ways you can support and contribute to our mission</li>
          </ul>
          <p>At Funds Catalyst, we believe in creating real, lasting change — and your support makes it possible. Together, we can empower communities and drive positive action.</p>
          <p>We're glad to have you as part of our growing community.</p>
          <p>Warm regards,</p>
          <p><strong>The Funds Catalyst Team</strong></p>
          <hr style="border: 0; border-top: 1px solid #eee;"/>
          <p style="font-size: 0.8em; color: #777;">
            You are receiving this email because you subscribed to our newsletter at 
            <a href="https://www.fundscatalyst.org" style="color: #0056b3; text-decoration: none;">fundscatalyst.org</a>.<br/>
            If you no longer wish to receive updates, you can unsubscribe at any time.
          </p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Newsletter welcome email sent successfully to ${subscriberEmail}`);
  } catch (error) {
    console.error(`Failed to send newsletter email to ${subscriberEmail}:`, error);
  }
};
