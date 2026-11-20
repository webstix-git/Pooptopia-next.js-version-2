"use client";

import { useState, type FormEvent } from "react";
import { subscribeToNewsletter } from "@/lib/newsletter";

export function FooterNewsletter() {
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
        ? "You're already subscribed. Thanks!"
        : "Thanks. You're on the list.",
    );
    form.reset();
  }

  return (
    <form className="footer-newsletter" onSubmit={onSubmit}>
      <label htmlFor="footer-newsletter-email">Email</label>
      <div className="footer-newsletter-row">
        <input
          id="footer-newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@email.com"
          disabled={pending}
        />
        <button type="submit" disabled={pending}>
          {pending ? "…" : "Subscribe"}
        </button>
      </div>
      {message ? (
        <p className="footer-newsletter-success" role="status">
          {message}
        </p>
      ) : null}
      {error ? (
        <p className="footer-newsletter-error" role="alert">
          {error}
        </p>
      ) : null}
    </form>
  );
}
