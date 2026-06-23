"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "loading" | "success" | "error";

interface ContactFormProps {
  className?: string;
  variant?: "default" | "minimal";
}

export function ContactForm({ className, variant = "default" }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error ?? "Kunde inte skicka meddelandet");
      }

      setStatus("success");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Något gick fel");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "space-y-5",
        variant === "default" && "rounded-2xl border border-border/60 bg-card p-6 shadow-sm md:p-8",
        className
      )}
    >
      <div className="space-y-2">
        <Label htmlFor="name">Namn</Label>
        <Input
          id="name"
          name="name"
          required
          placeholder="Ditt namn"
          disabled={status === "loading"}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">E-post</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="du@foretag.se"
          disabled={status === "loading"}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Meddelande</Label>
        <Textarea
          id="message"
          name="message"
          required
          minLength={10}
          placeholder="Berätta kort om ditt företag och vad du behöver hjälp med..."
          disabled={status === "loading"}
        />
      </div>
      <Button type="submit" className="w-full rounded-full" disabled={status === "loading"}>
        {status === "loading" ? "Skickar..." : "Skicka meddelande"}
      </Button>
      {status === "success" && (
        <p className="text-sm text-primary">Tack! Vi återkommer inom ett dygn.</p>
      )}
      {status === "error" && <p className="text-sm text-destructive">{errorMessage}</p>}
    </form>
  );
}
