"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";

export function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm tracking-wide text-accent">About</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.04em] md:text-5xl">
            Building interfaces that feel intentional
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="space-y-5 text-base leading-relaxed text-muted md:text-lg"
        >
          {site.about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
