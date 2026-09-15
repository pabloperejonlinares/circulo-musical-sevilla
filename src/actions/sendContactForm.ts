"use server";

import { Resend } from "resend";
import { VENUE } from "@/data/venue";

export type ContactFormInput = {
  name: string;
  email: string;
  phone: string;
  message: string;
  pageTitle: string;
  honeypot?: string;
};

export type ContactFormResult =
  | { ok: true }
  | { ok: false; error: string };

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(input: ContactFormInput): string | null {
  if (input.honeypot?.trim()) {
    return "No se pudo enviar el formulario.";
  }
  if (!input.name.trim()) {
    return "El nombre es obligatorio.";
  }
  if (!input.email.trim() || !EMAIL_REGEX.test(input.email.trim())) {
    return "Introduce un correo electrónico válido.";
  }
  if (!input.phone.trim()) {
    return "El número de teléfono es obligatorio.";
  }
  if (!input.message.trim()) {
    return "El mensaje es obligatorio.";
  }
  if (!input.pageTitle.trim()) {
    return "No se pudo identificar la página de origen.";
  }
  return null;
}

export async function sendContactForm(
  input: ContactFormInput
): Promise<ContactFormResult> {
  const validationError = validate(input);
  if (validationError) {
    return { ok: false, error: validationError };
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const fromEmail = process.env.RESEND_FROM_EMAIL?.trim();

  if (!apiKey || !fromEmail) {
    console.error("[sendContactForm] Missing RESEND_API_KEY or RESEND_FROM_EMAIL");
    return {
      ok: false,
      error: "El servicio de correo no está configurado. Inténtalo más tarde.",
    };
  }

  const from = fromEmail.includes("<")
    ? fromEmail
    : `Círculo Musical de Sevilla <${fromEmail}>`;

  const resend = new Resend(apiKey);
  const subject = `[Círculo Musical de Sevilla] - ${input.pageTitle.trim()}`;
  const body = [
    `Nombre: ${input.name.trim()}`,
    `Correo electrónico: ${input.email.trim()}`,
    `Teléfono: ${input.phone.trim()}`,
    "",
    "Mensaje:",
    input.message.trim(),
  ].join("\n");

  const { error } = await resend.emails.send({
    from,
    to: VENUE.email,
    replyTo: input.email.trim(),
    subject,
    text: body,
  });

  if (error) {
    console.error("[sendContactForm] Resend error:", error);
    return {
      ok: false,
      error: "No se pudo enviar el mensaje. Inténtalo de nuevo más tarde.",
    };
  }

  return { ok: true };
}
