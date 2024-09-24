"use server";
import nodemailer from "nodemailer";

export async function checkAvailability({
  hostelName,
  username,
  phone,
  email,
  message,
}: {
  hostelName: string;
  username: string;
  phone: string;
  email: string;
  message: string;
}) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    await transport.verify();
  } catch (error: any) {
    console.error("Error", error.message);
    return;
  }

  const text = `
    New inquiry regarding "${hostelName}" from ${username}:
    Phone: ${phone}
    Email: ${email}
    Message: ${message}
  `;

  try {
    await transport.sendMail({
      from: email, // Using the user's email as the sender
      to: SMTP_EMAIL, // Admin email
      subject: `Checking Availability for ${hostelName}`, // Subject includes hostel name
      text,
    });
  } catch (error: any) {
    console.error(error.message);
  }
}
