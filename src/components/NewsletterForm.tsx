"use client";

import { useState, type FormEvent } from "react";
import { subscribeToNewsletter } from "@/lib/newsletter";

export function NewsletterForm() {
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const email = String(new FormData(form).get("email") || "");
    setPending(true);
    setMessage(null);
    setError(null);

    const result = await subscribeToNewsletter(email);
    setPending(false);

    if (!result.ok) {
      setError(result.error);
      return;
    }

    setMessage(
      result.status === "existing"
        ? "You're already on the list. Thanks for sticking with us."
        : "You're in. Watch your inbox for yard notes from Pooptopia.",
    );
    form.reset();
  }

  return (
    <form className="newsletter-form" onSubmit={onSubmit}>
      <label htmlFor="newsletter-email">Email</label>
      <div className="newsletter-row">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@email.com"
          disabled={pending}
        />
        <button className="btn-solid" type="submit" disabled={pending}>
          {pending ? "Subscribing…" : "Subscribe"}
        </button>
      </div>
      {message ? (
        <p className="newsletter-success" role="status">
          {message}
        </p>
      ) : null}
      {error ? (
        <p className="newsletter-error" role="alert">
          {error}
        </p>
      ) : null}
    </form>
  );
}
