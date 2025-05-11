"use client"

import Link from "next/link"
import { ArrowRight, Code, Layers, Smartphone, Globe, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center"
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Studio-Project-EAkKactJ3pxxLIUTZMEqRSqMMfGp35.png"
                  alt="MCsak AR Solutions Logo"
                  className="h-8 w-auto mr-2"
                />
                <span className="font-bold text-xl">MCsak AR Solutions</span>
              </motion.div>
            </Link>
            <nav className="hidden md:flex gap-6">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Link
                  href="#services"
                  className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  Services
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Link
                  href="#portfolio"
                  className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  Portfolio
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Link
                  href="#about"
                  className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  About
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Link
                  href="#contact"
                  className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  Contact
                </Link>
              </motion.div>
            </nav>
          </div>
          <motion.div
            className="flex flex-1 items-center justify-end space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button asChild className="hover-lift">
              <Link href="#contact">Get Started</Link>
            </Button>
          </motion.div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <motion.h1
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    Transform Your Digital Experience with MCsak Solutions
                  </motion.h1>
                  <motion.p
                    className="max-w-[600px] text-muted-foreground md:text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Cutting-edge web development for businesses and individuals. From simple websites to complex web
                    applications.
                  </motion.p>
                </div>
                <motion.div
                  className="flex flex-col gap-2 min-[400px]:flex-row"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Button asChild size="lg" className="hover-lift">
                    <Link href="#contact">
                      Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="hover-lift">
                    <Link href="#portfolio">View Our Work</Link>
                  </Button>
                </motion.div>
              </div>
              <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]">
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 3,
                      ease: "easeInOut",
                    }}
                  >
                    <img
                      src="/ar-hero-image.png"
                      alt="Digital Experience Visualization"
                      className="object-cover rounded-lg shadow-xl"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Services</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Development Services</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From concept to deployment, we provide end-to-end web development solutions tailored to your needs.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="transition-all duration-300">
                <Card className="hover-card">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Smartphone className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Mobile-First Websites</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Responsive websites optimized for mobile devices that provide an excellent user experience across
                      all screen sizes.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="transition-all duration-300">
                <Card className="hover-card">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Web Applications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Feature-rich web applications that deliver powerful functionality and intuitive user interfaces.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="transition-all duration-300">
                <Card className="hover-card">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Custom Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Tailored solutions built with the latest technologies to meet your specific business requirements.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="transition-all duration-300">
                <Card className="hover-card">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Layers className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>UI/UX Design</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Beautiful, intuitive interfaces designed with user experience at the forefront to maximize
                      engagement.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="transition-all duration-300">
                <Card className="hover-card">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-primary"
                      >
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                        <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
                        <polyline points="7.5 19.79 7.5 14.6 3 12" />
                        <polyline points="21 12 16.5 14.6 16.5 19.79" />
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                        <line x1="12" y1="22.08" x2="12" y2="12" />
                      </svg>
                    </div>
                    <CardTitle>E-commerce Solutions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Powerful online stores with secure payment processing and inventory management.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="transition-all duration-300">
                <Card className="hover-card">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-primary"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                        <path d="M2 12h20" />
                      </svg>
                    </div>
                    <CardTitle>Interactive Websites</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Engaging web experiences with interactive elements that captivate and convert visitors.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Portfolio</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our innovative web solutions that have helped businesses transform their digital presence.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.div variants={itemVariants} whileHover={{ scale: 1.03 }} className="transition-all duration-300">
                <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                  <img
                    src="/ar-furniture-living-room.png"
                    alt="E-commerce Website"
                    className="h-64 w-full object-cover transition-all group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-xl font-bold text-white">E-commerce Platform</h3>
                    <p className="text-sm text-white/90">Online store for a furniture retailer</p>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} whileHover={{ scale: 1.03 }} className="transition-all duration-300">
                <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                  <img
                    src="/ar-anatomy-app.png"
                    alt="Educational Platform"
                    className="h-64 w-full object-cover transition-all group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-xl font-bold text-white">Educational Platform</h3>
                    <p className="text-sm text-white/90">Interactive learning experience for medical students</p>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} whileHover={{ scale: 1.03 }} className="transition-all duration-300">
                <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                  <img
                    src="/ar-marketing-packaging.png"
                    alt="Marketing Website"
                    className="h-64 w-full object-cover transition-all group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-xl font-bold text-white">Marketing Website</h3>
                    <p className="text-sm text-white/90">Interactive product showcase for a beverage company</p>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} whileHover={{ scale: 1.03 }} className="transition-all duration-300">
                <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                  <img
                    src="/web-ar-real-estate.png"
                    alt="Real Estate Platform"
                    className="h-64 w-full object-cover transition-all group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-xl font-bold text-white">Real Estate Platform</h3>
                    <p className="text-sm text-white/90">Virtual property tours with interactive elements</p>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} whileHover={{ scale: 1.03 }} className="transition-all duration-300">
                <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                  <img
                    src="/ar-mall-navigation.png"
                    alt="Navigation App"
                    className="h-64 w-full object-cover transition-all group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-xl font-bold text-white">Navigation App</h3>
                    <p className="text-sm text-white/90">Indoor mapping solution for a shopping mall</p>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} whileHover={{ scale: 1.03 }} className="transition-all duration-300">
                <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                  <img
                    src="/ar-try-on.png"
                    alt="Virtual Try-On"
                    className="h-64 w-full object-cover transition-all group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-xl font-bold text-white">Virtual Try-On</h3>
                    <p className="text-sm text-white/90">Interactive product visualization for an optical retailer</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <motion.div
                className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Us</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">MCsak Solutions</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We are a team of passionate developers, designers, and strategists dedicated to pushing the
                    boundaries of what's possible with web technology.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To make cutting-edge web technology accessible and valuable for businesses of all sizes, creating
                    immersive experiences that drive engagement and results.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Our Expertise</h3>
                  <ul className="grid gap-2 text-muted-foreground">
                    <motion.li
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Modern web frameworks (React, Next.js, Vue)</span>
                    </motion.li>
                    <motion.li
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Full-stack web development capabilities</span>
                    </motion.li>
                    <motion.li
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>UI/UX design and implementation</span>
                    </motion.li>
                  </ul>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <motion.img
                  src="/ar-developers-collaboration.png"
                  alt="MCsak Solutions Team"
                  className="rounded-lg object-cover shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Contact Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ready to transform your digital presence? Let's discuss your project.
                </p>
              </div>
            </motion.div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12">
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Contact Information</h3>
                  <p className="text-muted-foreground">
                    Reach out to us directly or fill out the form to start a conversation.
                  </p>
                </div>
                <div className="space-y-4">
                  <motion.div className="flex items-start gap-4" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Mail className="h-6 w-6 text-primary" />
                    <div className="space-y-1">
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">contact@mcsakar.com</p>
                    </div>
                  </motion.div>
                  <motion.div className="flex items-start gap-4" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Phone className="h-6 w-6 text-primary" />
                    <div className="space-y-1">
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">+91 6381612505</p>
                    </div>
                  </motion.div>
                  <motion.div className="flex items-start gap-4" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <div className="space-y-1">
                      <p className="font-medium">Address</p>
                      <p className="text-sm text-muted-foreground">
                        587, Mudikondan, Nadu Agraharam,
                        <br />
                        Thiruvarur District,
                        <br />
                        PIN: 609502
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        First name
                      </label>
                      <input
                        id="first-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Last name
                      </label>
                      <input
                        id="last-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tell us about your project"
                    ></textarea>
                  </div>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-background border-t">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4">
              <div className="flex items-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Studio-Project-EAkKactJ3pxxLIUTZMEqRSqMMfGp35.png"
                  alt="MCsak Solutions Logo"
                  className="h-8 w-auto mr-2"
                />
                <span className="text-xl font-bold">MCsak Solutions</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Transforming digital experiences with cutting-edge web solutions.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-lg font-semibold">Services</div>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Mobile-First Websites
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Web Applications
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Custom Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    UI/UX Design
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="text-lg font-semibold">Company</div>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#portfolio" className="text-muted-foreground hover:text-foreground">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <motion.div
            className="mt-6 border-t pt-6 text-center text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            © {new Date().getFullYear()} MCsak Solutions. All rights reserved.
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
