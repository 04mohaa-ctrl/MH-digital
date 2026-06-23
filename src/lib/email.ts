import { Resend } from "resend";
import type { ContactFormData } from "@/types";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL ?? "hello@mhdigital.se";

  if (!apiKey) {
    console.info("[contact] RESEND_API_KEY not set — logging submission:", data);
    return;
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: "MH Digital <onboarding@resend.dev>",
    to: [toEmail],
    replyTo: data.email,
    subject: `New contact from ${data.name}`,
    text: `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
  });

  if (error) {
    throw new Error(error.message);
  }
}

export { contactSchema };
