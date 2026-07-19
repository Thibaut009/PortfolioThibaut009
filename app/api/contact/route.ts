import { NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_RECIPIENT = "gabet.thibaut@gmail.com";

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Tous les champs sont requis." }, { status: 400 });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "Portfolio Thibaut <onboarding@resend.dev>",
      to: CONTACT_RECIPIENT,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `Nom : ${name}\nEmail : ${email}\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Échec de l'envoi. Réessaie plus tard." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Échec de l'envoi. Réessaie plus tard." }, { status: 500 });
  }
}
