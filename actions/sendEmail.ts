"use server";

import React from "react";
import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  //validação simples do server
  if (!validateString(senderEmail, 50)) {
    return {
      error: "Invalid email",
    };
  }

  if (!validateString(message, 250)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "ronnylrsd@gmail.com",
      subject: "Mensagem de contato do portfolio",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {message: message as string, senderEmail: senderEmail as string}),
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data
  }
};
