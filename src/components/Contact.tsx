"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";

export function Contact() {
  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hi Caue — I found your portfolio and would like to talk.",
  )}`;

  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-sm tracking-wide text-accent">Contact</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.04em] md:text-5xl">
            Let&apos;s build something
          </h2>
          <p className="mt-4 text-muted">
            Based in {site.location}. {site.availability}.
          </p>

          <a
            href={`mailto:${site.email}`}
            className="mt-10 inline-flex items-center bg-accent px-7 py-4 font-display text-lg font-semibold text-bg transition hover:brightness-110 md:text-xl"
          >
            Email me →
          </a>

          <p className="mt-4 text-sm text-muted">{site.email}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-14 flex flex-wrap gap-x-8 gap-y-4 border-t border-line pt-10 text-sm"
        >
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition hover:text-accent"
          >
            WhatsApp
          </a>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition hover:text-accent"
          >
            Resume PDF
          </a>
          <a
            href={`tel:${site.phoneTel}`}
            className="text-muted transition hover:text-accent"
          >
            {site.phoneDisplay}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
