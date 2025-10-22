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

export const  updateEmail = async (subject, content, emailList) => {
  // Send emails individually (can be modified to BCC if preferred)
  const sendResults = await Promise.allSettled(
    emailList.map((email) =>
      transporter.sendMail({
        from: `"Funds Catalyst" <${process.env.EMAIL_USER}>`,
        to: email,
        subject,
        text: content,
        html: `<p>${content}</p>`,
      })
    )
  )

  // Log and return results
  sendResults.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      console.log(`✅ Email sent to: ${emailList[index]}`)
    } else {
      console.error(`❌ Failed to send to ${emailList[index]}:`, result.reason)
    }
  })
}