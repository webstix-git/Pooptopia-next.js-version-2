import { createHash } from "node:crypto";

type SubscribeBody = {
  email?: string;
};

function mailchimpConfig() {
  const apiKey = process.env.MAILCHIMP_API_KEY?.trim();
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID?.trim();
  const serverPrefix =
    process.env.MAILCHIMP_SERVER_PREFIX?.trim() ||
    apiKey?.split("-").pop()?.trim();

  if (!apiKey || !audienceId || !serverPrefix) {
    return null;
  }

  return { apiKey, audienceId, serverPrefix };
}

function subscriberHash(email: string) {
  return createHash("md5").update(email.toLowerCase()).digest("hex");
}

export async function POST(request: Request) {
  const config = mailchimpConfig();
  if (!config) {
    return Response.json(
      { error: "Newsletter signup is not configured yet." },
      { status: 503 },
    );
  }

  let body: SubscribeBody;
  try {
    body = (await request.json()) as SubscribeBody;
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = String(body.email || "")
    .trim()
    .toLowerCase();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const auth = Buffer.from(`anystring:${config.apiKey}`).toString("base64");
  const membersUrl = `https://${config.serverPrefix}.api.mailchimp.com/3.0/lists/${config.audienceId}/members`;

  const createRes = await fetch(membersUrl, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email_address: email,
      status: "subscribed",
    }),
  });

  if (createRes.ok) {
    return Response.json({ ok: true, status: "subscribed" });
  }

  const createData = (await createRes.json().catch(() => null)) as {
    title?: string;
    detail?: string;
  } | null;

  if (createRes.status === 400 && createData?.title === "Member Exists") {
    const updateRes = await fetch(`${membersUrl}/${subscriberHash(email)}`, {
      method: "PUT",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status_if_new: "subscribed",
        status: "subscribed",
      }),
    });

    if (updateRes.ok) {
      return Response.json({ ok: true, status: "existing" });
    }
  }

  const detail = createData?.detail || "Could not subscribe right now. Please try again.";
  const isValidation =
    createRes.status === 400 &&
    /invalid|fake|looks fake|provide a valid email/i.test(detail);

  if (!isValidation) {
    console.error("Mailchimp subscribe failed:", createRes.status, createData);
  }

  return Response.json(
    { error: detail },
    { status: isValidation ? 400 : 502 },
  );
}
