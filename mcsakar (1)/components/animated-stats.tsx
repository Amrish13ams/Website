"use client"

import { AnimatedCounter } from "./animated-elements"

export default function AnimatedStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 py-8">
      <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg">
        <AnimatedCounter target={50} className="text-4xl font-bold text-primary" />
        <p className="text-sm text-center mt-2">AR Projects Completed</p>
      </div>

      <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg">
        <AnimatedCounter target={30} className="text-4xl font-bold text-primary" />
        <p className="text-sm text-center mt-2">Animation Projects</p>
      </div>

      <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg">
        <AnimatedCounter target={25} className="text-4xl font-bold text-primary" />
        <p className="text-sm text-center mt-2">Happy Clients</p>
      </div>

      <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg">
        <AnimatedCounter target={5} className="text-4xl font-bold text-primary" />
        <p className="text-sm text-center mt-2">Years Experience</p>
      </div>
    </div>
  )
}
