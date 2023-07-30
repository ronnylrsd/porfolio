"use client"

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-m-28"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id="about"
    >
      <SectionHeading>Sobre Mim</SectionHeading>
      <p className="mb-3">
        Desde pequeno eu adorava passar o tempo com meus primos e amigos no
        computador, acredito que daí que veio minha vontade de aprender a
        programar. Após o ensino médio, decidi, com o apoio da minha família,
        fazer bacharelado em{" "}
        <span className="font-medium">ciência da computação</span> na
        Universidade Católica de Pernambuco, onde estou atualmente.
        <span className="italic">Minha parte favorita de programar</span> é
        resolver problemas e ajudar as pessoas. Eu acho{" "}
        <span className="underline">incrível</span> o sentimento de finalmente
        encontrar a solução para um problema. As tecnologias que mais gosto de
        trabalhar são{" "}
        <span className="font-medium">React, React Native, Python e Java</span>.
        Eu tenho familiaridade com Typescript, HTML, CSS, Spring Boot. Além
        disso, estou sempre disposto a aprender novas tecnologias e linguagens.
        Atualmente, estou procurando um{" "}
        <span className="font-medium">estágio remunerado </span>
        como desenvolvedor de software.
      </p>
      <p>
        <span className="italic">Quando não estou programando</span>, gosto de
        jogar videogame, assistir filmes e séries,{" "}
        <span className="font-medium">ler livros</span>, ouvir música e brincar
        com meu gato. Também gosto de cozinhar e{" "}
        <span className="font-medium"> ir a academia</span>. Gosto bastante de
        conversar e aproveitar um tempinho com família e amigos.
      </p>
    </motion.section>
  );
}
