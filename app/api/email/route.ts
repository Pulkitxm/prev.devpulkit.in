"use server";

import { EmailTemplate } from "@/components/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const { RSEND_API, RESEND_TO_EMAIL, RESEND_FROM_EMAIL } = process.env;

export async function POST(req: NextRequest): Promise<NextResponse> {
  if (!RSEND_API || !RESEND_TO_EMAIL || !RESEND_FROM_EMAIL) {
    return NextResponse.json(
      { error: "Failed to send email" },
      {
        status: 500,
      },
    );
  }

  const resend = new Resend(RSEND_API);

  try {
    const data = await req.json();
    if (!data) {
      return NextResponse.json({ error: "No data provided" }, { status: 400 });
    }
    if (!data.from_name || !data.message || !data.sender_email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }
    const resp = await resend.emails.send({
      from: RESEND_FROM_EMAIL,
      to: RESEND_TO_EMAIL,
      subject: "🎉New submission to your contact form!",
      html: "",
      react: EmailTemplate(data),
    });

    if (resp.error) {
      return NextResponse.json(
        { error: "An error occurred" },
        {
          status: 500,
        },
      );
    }

    return NextResponse.json({ message: "Email sent" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "An error occurred" },
      {
        status: 500,
      },
    );
  }
}
