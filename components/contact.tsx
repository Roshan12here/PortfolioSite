"use client"
import SectionHeading from "./section-heading"
import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks"
import { Mail, Linkedin, MessageCircle } from "lucide-react"

export default function Contact() {
  const { ref } = useSectionInView("Contact")

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80 mb-8">
        Feel free to reach out through any of these Links
      </p>

      <div className="flex flex-col gap-4 items-center">
        <a
href="mailto:roshangamercs2tf3@gmail.com"
className="flex items-center gap-2 text-gray-700 dark:text-white/80 hover:text-gray-950 dark:hover:text-white transition-colors"
        >
          <Mail className="w-6 h-6" />
          <span>roshangamercs2tf3@gmail.com</span>
        </a>

        <a
          href="https://www.linkedin.com/in/roshan-coder-843b3329b/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-700 dark:text-white/80 hover:text-gray-950 dark:hover:text-white transition-colors"
        >
          <Linkedin className="w-6 h-6" />
          <span>LinkedIn Profile</span>
        </a>

        <a
href="https://wa.me/923205998280"
target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-700 dark:text-white/80 hover:text-gray-950 dark:hover:text-white transition-colors"
        >
          <MessageCircle className="w-6 h-6" />
          <span>WhatsApp</span>
        </a>
      </div>
    </motion.section>
  )
}

