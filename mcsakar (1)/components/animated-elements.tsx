"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

export const FadeInWhenVisible = ({
  children,
  delay = 0.2,
  duration = 0.5,
  ...props
}: {
  children: React.ReactNode
  delay?: number
  duration?: number
  [key: string]: any
}) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration, delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const FloatingAnimation = ({
  children,
  amplitude = 10,
  duration = 3,
  ...props
}: {
  children: React.ReactNode
  amplitude?: number
  duration?: number
  [key: string]: any
}) => {
  return (
    <motion.div
      animate={{
        y: [0, amplitude, 0, -amplitude, 0],
      }}
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        duration,
        ease: "easeInOut",
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const PulseAnimation = ({
  children,
  scale = 1.05,
  duration = 2,
  ...props
}: {
  children: React.ReactNode
  scale?: number
  duration?: number
  [key: string]: any
}) => {
  return (
    <motion.div
      animate={{
        scale: [1, scale, 1],
      }}
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        duration,
        ease: "easeInOut",
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const RotateAnimation = ({
  children,
  degrees = 360,
  duration = 20,
  ...props
}: {
  children: React.ReactNode
  degrees?: number
  duration?: number
  [key: string]: any
}) => {
  return (
    <motion.div
      animate={{
        rotate: degrees,
      }}
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        duration,
        ease: "linear",
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const AnimatedCounter = ({
  target,
  duration = 2,
  ...props
}: {
  target: number
  duration?: number
  [key: string]: any
}) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      let animationFrame: number

      const updateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        setCount(Math.floor(progress * target))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(updateCount)
        }
      }

      animationFrame = requestAnimationFrame(updateCount)

      return () => cancelAnimationFrame(animationFrame)
    }
  }, [isInView, target, duration])

  return (
    <div ref={ref} {...props}>
      {count}
    </div>
  )
}

export const TypewriterText = ({
  text,
  speed = 50,
  ...props
}: {
  text: string
  speed?: number
  [key: string]: any
}) => {
  const [displayText, setDisplayText] = useState("")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let i = 0
      const timer = setInterval(() => {
        if (i < text.length) {
          setDisplayText((prev) => prev + text.charAt(i))
          i++
        } else {
          clearInterval(timer)
        }
      }, speed)

      return () => clearInterval(timer)
    }
  }, [isInView, text, speed])

  return (
    <div ref={ref} {...props}>
      {displayText}
    </div>
  )
}
