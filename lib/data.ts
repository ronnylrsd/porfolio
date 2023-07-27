import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import todochallengerImg from "@/public/todochallenger.png";
import igniteteamsImg from "@/public/igniteteams.png";
import appplanetasImg from "@/public/app-planetas.png";

export const links = [
  {
    name: "Início",
    hash: "#home",
  },
  {
    name: "Sobre",
    hash: "#about",
  },
  {
    name: "Projetos",
    hash: "#projects",
  },
  {
    name: "Habilidades",
    hash: "#skills",
  },
  {
    name: "Experiência",
    hash: "#experience",
  },
  {
    name: "Contato",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bacharelado em Ciência da Computação",
    location: "Recife, PE",
    description:
      "Graduando em ciência da computação na Universidade Católica de Pernambuco.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Estágio Desenvolvimento Front-End",
    location: "Recife, PE",
    description:
      "Eu trabalho como estagiário front-end (5 meses)",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "Todolist-challenger",
    description:
      "API de tarefas com Spring Boot",
    tags: ["Spring Boot", "Spring MVC", "Spring Data JPA", "SpringDoc OpenAPI 3", "Mysql"],
    imageUrl: todochallengerImg,
  },
  {
    title: "IgniteTeams",
    description:
      "Uma aplicação de turmas e separação dos times",
    tags: ["React Native", "TypeScript"],
    imageUrl: igniteteamsImg,
  },
  {
    title: "App-Planetas",
    description:
      "Tudo sobre planetas do nosso sistema solar!",
    tags: ["Kotlin", "Android"],
    imageUrl: appplanetasImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Git",
  "Python",
  "Java",
  "Spring Boot",
  "SQL",
] as const;