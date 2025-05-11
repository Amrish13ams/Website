"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { ReactNode } from "react"

interface AnimatedButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

export function AnimatedButton({
  children,
  className = "",
  onClick,
  variant = "default",
  size = "default",
  asChild = false,
}: AnimatedButtonProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
      <Button className={className} onClick={onClick} variant={variant} size={size} asChild={asChild}>
        {children}
      </Button>
    </motion.div>
  )
}

export function GlowButton({
  children,
  className = "",
  onClick,
  variant = "default",
  size = "default",
  asChild = false,
}: AnimatedButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(124, 58, 237, 0.5)" }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="rounded-md"
    >
      <Button className={className} onClick={onClick} variant={variant} size={size} asChild={asChild}>
        {children}
      </Button>
    </motion.div>
  )
}
