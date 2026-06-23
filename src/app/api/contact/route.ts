import { NextResponse } from "next/server";
import { z } from "zod";
import { contactSchema, sendContactEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const data = contactSchema.parse(body);
    await sendContactEmail(data);
    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.flatten() },
        { status: 400 }
      );
    }
    console.error("[api/contact]", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
