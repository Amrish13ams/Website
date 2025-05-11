"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
}

export function AnimatedText({ text, className = "", once = true }: AnimatedTextProps) {
  // Split the text into an array of letters
  const letters = Array.from(text)

  // Variants for the container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  }

  // Variants for each letter
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      className={`overflow-hidden inline-flex ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  )
}

interface AnimatedTitleProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimatedTitle({ children, className = "", delay = 0 }: AnimatedTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedGradientText({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.span
      className={`bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.span>
  )
}
