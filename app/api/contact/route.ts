import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Configure the transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL, // Your Gmail address
        pass: process.env.SMTP_PASSWORD, // Your Gmail App Password
      },
    });

    const emailContent = `
New Contact Form Submission from Janixware Website

Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}

Message:
${message}

---
This message was sent from the Janixware contact form.
    `.trim();

    // Send the email
    await transporter.sendMail({
      from: process.env.SMTP_EMAIL, // Sender address (must be your Gmail)
      to: "janixware@gmail.com", // Receiver address
      replyTo: email, // When you hit reply, it goes to the user
      subject: `New Contact Form Submission from ${name}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
          <div style="background: #f5f7fb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || "Not provided"}</p>
          </div>
          <div style="background: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
            <h3 style="color: #1e40af;">Message:</h3>
            <p style="white-space: pre-wrap; color: #475569;">${message}</p>
          </div>
        </div>
      `,
    });

    const whatsappMessage = `New Contact Form Submission%0A%0AName: ${encodeURIComponent(
      name
    )}%0AEmail: ${encodeURIComponent(
      email
    )}%0ACompany: ${encodeURIComponent(
      company || "Not provided"
    )}%0A%0AMessage:%0A${encodeURIComponent(message)}`;
    
    const whatsappUrl = `https://wa.me/94713974674?text=${whatsappMessage}`;

    return NextResponse.json(
      {
        success: true,
        message:
          "Your message has been sent successfully! We'll get back to you soon.",
        whatsappUrl,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      {
        error: `Failed to send message: ${
          error instanceof Error ? error.message : String(error)
        }`,
      },
      { status: 500 }
    );
  }
}
