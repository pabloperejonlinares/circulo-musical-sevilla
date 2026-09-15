"use client";

import { useState } from "react";
import { Button, Input, Textarea } from "@heroui/react";
import { sendContactForm } from "@/actions/sendContactForm";

type ClassContactFormProps = {
  pageTitle: string;
};

export function ClassContactForm({ pageTitle }: ClassContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback(null);
    setIsSubmitting(true);

    const result = await sendContactForm({
      name,
      email,
      phone,
      message,
      pageTitle,
      honeypot,
    });

    setIsSubmitting(false);

    if (result.ok) {
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setFeedback({
        type: "success",
        text: "Gracias. Hemos recibido tu mensaje y contactaremos contigo pronto.",
      });
      return;
    }

    setFeedback({ type: "error", text: result.error });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="sr-only" aria-hidden>
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>

      <Input
        isRequired
        label="Nombre"
        name="name"
        value={name}
        onValueChange={setName}
        variant="bordered"
      />
      <Input
        isRequired
        type="email"
        label="Correo electrónico"
        name="email"
        value={email}
        onValueChange={setEmail}
        variant="bordered"
      />
      <Input
        isRequired
        type="tel"
        label="Número de teléfono"
        name="phone"
        value={phone}
        onValueChange={setPhone}
        variant="bordered"
      />
      <Textarea
        isRequired
        label="Mensaje"
        name="message"
        value={message}
        onValueChange={setMessage}
        variant="bordered"
        minRows={4}
      />

      {feedback && (
        <p
          role="status"
          className={
            feedback.type === "success"
              ? "text-success-600"
              : "text-danger-600"
          }
        >
          {feedback.text}
        </p>
      )}

      <Button
        type="submit"
        color="primary"
        isLoading={isSubmitting}
        className="w-full sm:w-auto"
      >
        Enviar
      </Button>
    </form>
  );
}
