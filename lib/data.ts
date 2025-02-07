import React from "react"; 
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { link } from "fs";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "Frontend Developer",
    location: "Remote",
    description:
      "Developed dynamic and responsive web applications using React, Vue, and Redux, enhancing UI/UX experiences.",
    icon: React.createElement(CgWorkAlt),
    date: "2019",
  },
  {
    title: "Full Stack Developer",
    location: "Remote",
    description:
      "Led frontend and backend development at Hukumat Networks, working extensively with Next.js, Golang, Node.js, and TypeScript. Contributed as a founding engineer on key projects.",
    icon: React.createElement(CgWorkAlt),
    date: "2021-2024",
  },
  {
    title: "Developer Lead",
    location: "Remote",
    description:
      "Spearheaded development for PassKash, focusing on blockchain technology, crypto wallets, and fintech solutions.",
    icon: React.createElement(FaReact),
    date: "2024",
  },
  {
    title: "Full Stack Developer",
    location: "Remote",
    description:
      "Engineered a robust Transportation Management System (TMS) for the logistics industry at Ultraship, utilizing Next.js, TypeScript, GraphQL, Java, and Spring Boot.",
    icon: React.createElement(FaReact),
    date: "2024 - 2025",
  },
] as const;

export const projectsData = [
  {
    title: "JobbyAi",
    description:
      "An AI-powered SaaS platform that assists users in career development. It provides industry insights, AI-generated resumes, cover letters, and interactive quizzes.",
    tags: ["React", "Next.js", "NeonDB", "Tailwind", "Prisma", "Gemini AI"],
    imageUrl: "/p2.png",
    githubUrl:"https://github.com/Roshan12here/JobbyAI",
    Link:"https://jobby-ai.vercel.app"
  },
  {
    title: "CodeCrafts",
    description:
      "A collaborative platform where developers can share, execute, and test code snippets in multiple languages.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Convex"],
    imageUrl: "/p1.png",
    githubUrl:"https://github.com/Roshan12here/CodeCraft",
    Link:"https://code-crafts-roshan.vercel.app/"
  },
  {
    title: "LiveDocs",
    description:
      "A real-time document collaboration tool similar to Google Docs, allowing multiple users to edit documents simultaneously.",
    tags: ["React", "Next.js", "Tailwind", "Redis"],
    imageUrl: "/j3.png",
    githubUrl:"https://github.com/Roshan12here/LiveDOCSNEXT",
    Link:"https://live-docsnext.vercel.app/"
  },
] as const;

export const skillsData = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
  "Git", "Tailwind", "Prisma", "MongoDB", "Redux", "GraphQL", "Apollo",
  "Express", "PostgreSQL", "Golang", "Docker", "Framer Motion",
] as const;
