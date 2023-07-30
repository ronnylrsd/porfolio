"use client";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contato");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Fale Comigo</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Por favor, entre em contato comigo pelo meu e-mail{" "}
        <a className="underline" href="mailto:ronnylrsd@gmail.com">
          ronnylrsd@gmail.com
        </a>{" "}
        ou por esse formulário
      </p>

      <form className="mt-10 ml-4 flex flex-col" 
      action={async (formData) => {
        const { data, error } = await sendEmail(formData);

        if(error) {
          toast.error(error);
          return;
        }

        toast.success('Email enviado com sucesso!');
      }}>
        <input name="senderEmail" type="email" required maxLength={50} className="h-14 px-4 rounded-lg borderBlack" placeholder="Seu email" />
        <textarea name="message" required maxLength={250} className="h-52 my-3 rounded-lg borderBlack p-4" placeholder="Sua Mensagem"></textarea>
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
