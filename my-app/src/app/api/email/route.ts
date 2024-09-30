import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, subject, message, name, lastName } = body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = name
    ? {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `New Contact Form Submission from ${name} ${lastName}`,
        text: `You have received a new message from ${name} ${lastName} (${email}):\n\n${message}`,
      }
    : {
        from: process.env.EMAIL_USER,
        to: email,
        subject: subject,
        text: message,
      };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send email!",
        details: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
