export type NewsletterResult =
  | { ok: true; status: "subscribed" | "existing" }
  | { ok: false; error: string };

export async function subscribeToNewsletter(email: string): Promise<NewsletterResult> {
  const res = await fetch("/api/newsletter", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  const data = (await res.json().catch(() => null)) as
    | { ok?: boolean; status?: "subscribed" | "existing"; error?: string }
    | null;

  if (!res.ok || !data?.ok) {
    return {
      ok: false,
      error: data?.error || "Could not subscribe right now. Please try again.",
    };
  }

  return { ok: true, status: data.status === "existing" ? "existing" : "subscribed" };
}
