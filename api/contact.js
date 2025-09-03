// api/contact.js

const nodemailer = require('nodemailer');

// This is the main function that Vercel's serverless platform will run
export default async (req, res) => {
  // Check that the request method is POST. Vercel automatically handles this for API routes.
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Your Nodemailer setup with environment variables
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // The email content and recipients
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New Portfolio Message from ${name}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  };

  try {
    // Attempt to send the email
    await transporter.sendMail(mailOptions);
    // Send a success response
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    // Log the error for debugging on Vercel
    console.error(error);
    // Send a failure response
    res.status(500).json({ success: false, message: 'Failed to send message. Please try again.' });
  }
};