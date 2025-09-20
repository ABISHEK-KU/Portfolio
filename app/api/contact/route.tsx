// app/api/contact/route.ts

import { NextRequest, NextResponse } from "next/server";
import nodemailer, { type SendMailOptions, type Transporter } from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const transporter: Transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST!,
      port: parseInt(process.env.SMTP_PORT || "587", 10),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
    });

    const mailOptions: SendMailOptions = {
      from: `"Portfolio Contact" <${email}>`,
      to: process.env.CONTACT_EMAIL!,
      subject: `New Contact Form Submission from ${name}`,
      text: `Message:\n${message}`,
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message.replace(
        /\n/g,
        "<br>"
      )}</p>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
