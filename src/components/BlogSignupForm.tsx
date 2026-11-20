"use client";

import { useState, type FormEvent } from "react";
import { subscribeToNewsletter } from "@/lib/newsletter";

type FormStatus = "idle" | "loading" | "success" | "existing" | "error";

export function BlogSignupForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const email = String(new FormData(form).get("email") || "");
    setStatus("loading");
    setMessage(null);
    setError(null);

    const result = await subscribeToNewsletter(email);

    if (!result.ok) {
      setStatus("error");
      setError(result.error);
      return;
    }

    const nextStatus = result.status === "existing" ? "existing" : "success";
    setStatus(nextStatus);
    setMessage(
      nextStatus === "existing"
        ? "You're already subscribed. You'll keep getting our newsletter updates."
        : "Successfully subscribed! You'll receive our newsletter updates soon.",
    );
    form.reset();
  }

  const busy = status === "loading";
  const done = status === "success" || status === "existing";

  return (
    <form className="blog-signup-form" onSubmit={onSubmit} aria-busy={busy}>
      <label className="sr-only" htmlFor="blog-email">
        Email address
      </label>
      <input
        id="blog-email"
        type="email"
        name="email"
        autoComplete="email"
        required
        placeholder="Email address"
        disabled={busy}
        onChange={() => {
          if (status === "success" || status === "existing" || status === "error") {
            setStatus("idle");
            setMessage(null);
            setError(null);
          }
        }}
      />
      <button
        className={[
          "blog-signup-submit",
          busy ? "is-loading" : "",
          done ? "is-success" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        type="submit"
        disabled={busy || done}
        aria-live="polite"
        aria-label={busy ? "Subscribing" : done ? "Subscribed" : "Sign up"}
      >
        {busy ? (
          <span className="newsletter-spinner" aria-hidden="true" />
        ) : done ? (
          <svg
            className="newsletter-check-icon"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M5 12.5 9.5 17 19 7.5"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          "Sign up"
        )}
      </button>
      {message ? (
        <p className="blog-signup-success" role="status">
          {message}
        </p>
      ) : null}
      {error ? (
        <p className="blog-signup-error" role="alert">
          {error}
        </p>
      ) : null}
    </form>
  );
}
