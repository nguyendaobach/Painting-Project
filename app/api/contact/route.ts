import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate request body
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      console.error("RESEND_API_KEY is not defined in environment variables.")
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      )
    }

    // Call Resend API
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <contact@minh-doan.com>",
        to: "nguyendaobach@gmail.com",
        reply_to: email,
        subject: subject ? `${subject} - from ${name}` : `New Message from ${name} via Portfolio`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #333; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ""}
            <p><strong>Message:</strong></p>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap; font-style: italic;">
              ${message}
            </div>
            <hr style="border: none; border-top: 1px solid #eee; margin-top: 20px;" />
            <p style="font-size: 12px; color: #666;">This email was sent from your portfolio website's contact form.</p>
          </div>
        `,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error("Resend API error:", data)
      return NextResponse.json(
        { error: data.message || "Failed to send email." },
        { status: response.status }
      )
    }

    return NextResponse.json({ success: true, data })
  } catch (error: any) {
    console.error("Error in contact API route:", error)
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred." },
      { status: 500 }
    )
  }
}
