import nodemailer from 'nodemailer';

// Create reusable transporter
export async function createTestAccount() {
  // Generate test SMTP service account from ethereal.email
  const testAccount = await nodemailer.createTestAccount();

  // Create a transporter using the test account
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  return { transporter, testAccount };
}

export async function sendEmail(data: { 
  name: string; 
  email: string; 
  message: string; 
}) {
  const { transporter, testAccount } = await createTestAccount();

  // Send mail with defined transport object
  const info = await transporter.sendMail({
    from: `"${data.name}" <${data.email}>`,
    to: testAccount.user, // For testing, emails go to ethereal inbox
    subject: 'New Contact Form Submission',
    text: data.message,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>From:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `,
  });

  // Return preview URL for testing
  return nodemailer.getTestMessageUrl(info);
}
