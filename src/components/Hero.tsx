"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section
      id="home"
      className="atmosphere relative flex min-h-[100svh] items-stretch pt-16"
    >
      <div className="mx-auto grid w-full max-w-6xl lg:grid-cols-[1.05fr_0.95fr]">
        <div className="order-2 flex flex-col justify-center px-6 py-12 lg:order-1 lg:py-24">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-muted sm:mb-6"
          >
            {site.location} · {site.role}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.04 }}
            className="brand-name text-[clamp(4.25rem,16vw,10.5rem)] text-fg"
          >
            {site.brand}
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-5 h-1 w-20 origin-left bg-accent sm:mt-6 sm:w-24"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="mt-6 max-w-md text-lg font-medium leading-snug text-fg/90 sm:mt-8 sm:text-xl md:text-2xl"
          >
            {site.heroLine}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3 }}
            className="mt-3 max-w-md text-sm text-muted"
          >
            {site.availability}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.36 }}
            className="mt-8 flex flex-wrap gap-3 sm:mt-10"
          >
            <a
              href="#projects"
              className="inline-flex items-center bg-accent px-5 py-3 text-sm font-semibold text-bg transition hover:brightness-110 sm:px-6"
            >
              View projects
            </a>
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-line px-5 py-3 text-sm text-fg transition hover:border-accent hover:text-accent sm:px-6"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center border border-transparent px-5 py-3 text-sm text-muted transition hover:text-fg sm:px-6"
            >
              Contact
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative order-1 min-h-[280px] overflow-hidden border-b border-line/40 sm:min-h-[360px] lg:order-2 lg:min-h-full lg:border-b-0 lg:border-l"
        >
          <Image
            src="/images/photo.jpg"
            alt={`${site.name}`}
            fill
            priority
            className="object-cover object-[center_20%]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent lg:bg-gradient-to-r lg:from-bg/80 lg:via-bg/20 lg:to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8">
            <p className="font-display text-2xl font-bold tracking-tight text-fg sm:text-3xl md:text-4xl">
              Front-end
            </p>
            <p className="mt-1 text-sm text-muted">React · Next.js · TypeScript</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
