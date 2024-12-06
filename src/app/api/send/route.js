import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend('re_N3KKij79_MshGW1ZM7ArmV8umPYKv3KRC');

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['aziz.souissi01@gmail.com'],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>from {email}</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
