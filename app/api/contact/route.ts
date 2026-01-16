import { Resend } from "resend";
import { NextResponse } from "next/server";

// Initialize Resend only if API key is available
const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new Resend(apiKey);
};

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

    // Format the message for email and WhatsApp
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

    const whatsappMessage = `New Contact Form Submission%0A%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0ACompany: ${encodeURIComponent(company || "Not provided")}%0A%0AMessage:%0A${encodeURIComponent(message)}`;

    // Send email notification
    try {
      const resend = getResend();
      if (resend) {
        await resend.emails.send({
          from: "Janixware Contact Form <onboarding@resend.dev>", // Update this with your verified domain
          to: "janixware@gmail.com",
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
              <p style="color: #64748b; font-size: 12px; margin-top: 20px;">
                This message was sent from the Janixware contact form.
              </p>
            </div>
          `,
        });
      } else {
        console.warn("Resend API key not configured. Email sending skipped.");
      }
    } catch (emailError) {
      console.error("Email sending error:", emailError);
      // Continue even if email fails
    }

    // Send WhatsApp notification
    // Method 1: Using WhatsApp Business API via webhook (recommended for production)
    // You can set up a webhook service like Zapier, Make.com, or use Twilio
    const whatsappText = `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nCompany: ${company || "Not provided"}\n\nMessage:\n${message}`;
    const whatsappUrl = `https://wa.me/94713974674?text=${whatsappMessage}`;
    
    // Send WhatsApp notification via webhook if configured
    if (process.env.WHATSAPP_WEBHOOK_URL) {
      try {
        const webhookResponse = await fetch(process.env.WHATSAPP_WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phone: "94713974674",
            message: whatsappText,
            name: name,
            email: email,
            company: company || "Not provided",
          }),
        });
        
        if (!webhookResponse.ok) {
          console.error("WhatsApp webhook failed:", await webhookResponse.text());
        }
      } catch (whatsappError) {
        console.error("WhatsApp webhook error:", whatsappError);
        // Continue even if WhatsApp fails
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully! We'll get back to you soon.",
        whatsappUrl, // This can be used to open WhatsApp with pre-filled message
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

