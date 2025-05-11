"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { ReactNode } from "react"

interface AnimatedCardProps {
  children: ReactNode
  className?: string
}

export function AnimatedCard({ children, className = "" }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      className={className}
    >
      <Card>{children}</Card>
    </motion.div>
  )
}

interface AnimatedCardContentProps {
  title?: ReactNode
  description?: ReactNode
  headerClassName?: string
  contentClassName?: string
  footerClassName?: string
  children?: ReactNode
  footer?: ReactNode
}

export function AnimatedCardContent({
  title,
  description,
  headerClassName = "",
  contentClassName = "",
  footerClassName = "",
  children,
  footer,
}: AnimatedCardContentProps) {
  return (
    <>
      {(title || description) && (
        <CardHeader className={headerClassName}>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      {children && <CardContent className={contentClassName}>{children}</CardContent>}
      {footer && <CardFooter className={footerClassName}>{footer}</CardFooter>}
    </>
  )
}
