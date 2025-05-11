"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedIconProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function PulseIcon({ children, className = "", delay = 0 }: AnimatedIconProps) {
  return (
    <motion.div
      className={className}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.1 }}
    >
      {children}
    </motion.div>
  )
}

export function FloatingIcon({ children, className = "", delay = 0 }: AnimatedIconProps) {
  return (
    <motion.div
      className={className}
      initial={{ y: 0 }}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}

export function RotatingIcon({ children, className = "", delay = 0 }: AnimatedIconProps) {
  return (
    <motion.div
      className={className}
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "linear",
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}

export function BounceIcon({ children, className = "", delay = 0 }: AnimatedIconProps) {
  return (
    <motion.div
      className={className}
      initial={{ y: 0 }}
      animate={{ y: [0, -15, 0] }}
      transition={{
        duration: 1,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeOut",
        delay,
        times: [0, 0.5, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
