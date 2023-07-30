"use client";

import Image from "next/image";
import React from "react";
import profileIMG from "@/public/profile-image.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Início", 0.5);
  const { setActiveSection, setTimeOfLastCLick } = useActiveSectionContext();
  
  return (
    <section ref={ref} id="home" className="scroll-mt-[100rem] mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={profileIMG}
              alt="Foto de Ronny"
              quality="95"
              width="192"
              height="192"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute bottom-0 left-0 text-4xl"
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Olá, eu sou o Ronny.</span> Um graduando em
        ciência da computação com <span className="font-bold">alto</span>{" "}
        coeficiente de rendimento e{" "}
        <span className="font-bold">desenvolvedor</span>. Eu me divirto
        construindo <span className="italic">sites & apps</span>. Meu foco é o{" "}
        <span className="underline">React e Java</span>.
      </motion.h1>
      <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-1 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contato");
            setTimeOfLastCLick(Date.now());
          }}
        >
          Entre em contato comigo <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition" />
        </Link>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-1
         rounded-full outline-none focus:scale-110 hover:scale-110 
         active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
         href="/CV.pdf"
         download
        >
          Baixar CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white text-gray-700 p-4 flex items-center gap-1
         rounded-full hover:text-gray-950 focus:scale-[1.15] hover:scale-[1.15] 
         active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
         href="https://www.linkedin.com/in/ronnylrsd/" target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white text-gray-700 p-4 flex items-center gap-1
         rounded-full text-[1.35rem] hover:text-gray-950 focus:scale-[1.15] hover:scale-[1.15]
         active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
         href="https://github.com/ronnylrsd" target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
